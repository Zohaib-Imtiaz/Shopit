"use client";
import { Card } from "@components/Card/Card";
import { Carousel } from "@components/Carousel/Carousel";
import { CarouselDefault } from "@components/Carousel/Carousel.stories";
import { Col, Divider, Image, Row, Tag, Typography } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { Key, useCallback, useEffect, useRef, useState } from "react";
import classes from "./styles.module.css";
import { Button } from "@components/Button/Button";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CreditCardOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { client } from "@/sanity/lib/client";
import Loader from "@components/Loader/Loader";
import { localCurrency } from "@/utils/intl";

export async function getData(id: string) {
  const query = `*[_type=='Product'&& selling==true && _id==$id] | order(_updatedAt)
    {_id, title, price, images[] {
        "url": asset->url,
        "metadata": {
          "dimensions": asset->metadata.dimensions,
          "palette": asset->metadata.palette
        }
      }, currency, category->{title}, discountedPrice, _updatedAt}`;

  const data = await client.fetch(query, { id });

  return data[0];
}

const { Title, Text, Paragraph } = Typography;

interface defaultProduct {
  category: {
    title: string;
  };
  currency: string;
  discountedPrice: number;
  images: {
    url: string;
  }[];
  price: number;
  title: string;
  _id: string;
  _updatedAt: string;
}

const SingleProductPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<any>();
  const [loading, setLoading] = useState(true);
  const nav1 = useRef();
  const nav2 = useRef();

  const onChange = (currentSlide: any) => {
    if (nav1.current) {
      (nav1.current as CarouselRef).goTo(currentSlide, false);
    }
  };

  const sanityGetData = useCallback(async () => {
    setLoading(true);
    const data = await getData(params.id);
    console.log(data.images);
    setProduct(data);
    setLoading(false);
  }, [params.id]);
  useEffect(() => {
    sanityGetData();
  }, [sanityGetData]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={classes.main}>
      <Row gutter={[64, 64]}>
        <Col md={12}>
          <Carousel
            {...CarouselDefault.args}
            style={{ width: "auto" }}
            asNavFor={nav2.current}
            ref={nav1}
            dots={false}
          >
            {product.images?.map(
              (
                img: { url: string | undefined },
                index: Key | null | undefined
              ) => {
                return (
                  <div key={index} onClick={() => onChange(index)}>
                    <Image src={img.url} alt="" />
                  </div>
                );
              }
            )}
          </Carousel>
          <Carousel
            // {...CarouselDefault.args}
            centerMode={false}
            infinite={false}
            slidesToShow={product.images.length < 5 ? product.images.length : 5}
            asNavFor={nav1.current}
            ref={nav2}
            dots={false}
            style={{ width: "100%" }}
            arrows={true}
            nextArrow={<ArrowRightOutlined />}
            prevArrow={<ArrowLeftOutlined />}
          >
            {product.images?.map(
              (
                img: { url: string | undefined },
                index: Key | null | undefined
              ) => {
                return (
                  <div key={index} onClick={() => onChange(index)}>
                    <Image preview={false} src={img.url} alt="" />
                  </div>
                );
              }
            )}
          </Carousel>
        </Col>
        <Col md={12}>
          <Card>
            <Title>{product.title}</Title>
            <Title level={2}>{product.overview}</Title>
            <Text delete={product.discount}>
              {/* {product.currency} */}
              {localCurrency(product.price, product.currency)}
            </Text>
            &emsp;
            {product.discount && (
              <>
                <Text>
                  {product.currency}
                  {product.discounted_price}
                </Text>
                &ensp;
                <Tag color="green">{product.discounted_percentage}% Off</Tag>
              </>
            )}
            {/* <Divider orientation="left">Specification</Divider>
            <ul className={classes.divided_section}>
              {product.specs.map((spec, index) => (
                <li key={index}>
                  <Text>{spec}</Text>
                </li>
              ))}
            </ul> */}
            <Divider orientation="left">Description</Divider>
            <Paragraph className={classes.divided_section}>
              {product.description}
            </Paragraph>
            <Divider />
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Button
                  type="primary"
                  color="#2db7f5"
                  block
                  size="large"
                  icon={<ShoppingOutlined style={{ fontSize: "24px" }} />}
                >
                  Add to bag
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  type="primary"
                  color="#87d068"
                  block
                  size="large"
                  icon={<CreditCardOutlined style={{ fontSize: "24px" }} />}
                >
                  Buy Now
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SingleProductPage;
