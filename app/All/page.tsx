"use client";

import { Col, Image, Row } from "antd";
import classes from "./styles.module.css";
import { Card } from "@components/Card/Card";
import { ListingProductCard } from "@components/Card/Card.stories";
import { FiltersAndSorts } from "@components/Filters&Sorts/Filters&Sorts";
import { client } from "@/sanity/lib/client";
import { Key, useCallback, useEffect, useState } from "react";
import Loader from "@components/Loader/Loader";
import { ProductOverview } from "@components/ProductOverview/ProductOverview";
import { discountPercentage } from "@/utils/formulas";
import { Carousel } from "@components/Carousel/Carousel";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export async function getData() {
  const query = `*[_type=='Product' && selling==true] | order(_updatedAt)
  {_id, title, price, images[] {
      "url": asset->url,
      "metadata": {
        "dimensions": asset->metadata.dimensions,
        "palette": asset->metadata.palette
      }
    }, currency, category->{title}, discountedPrice, _updatedAt}`;

  const data = await client.fetch(query);

  return data;
}

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const sanityGetData = useCallback(async () => {
    setLoading(true);
    const data = await getData();
    console.log(data);
    setProducts(data);
    setLoading(false);
  }, []);
  useEffect(() => {
    sanityGetData();
  }, [sanityGetData]);
  return (
    <div className={classes.main}>
      <Row gutter={[64, 64]}>
        <Col lg={6}>
          <FiltersAndSorts />
        </Col>
        <Col lg={18}>
          {loading ? (
            <Loader />
          ) : (
            <Row>
              {products.map((product: any, i: number) => {
                return (
                  <Col key={product._id}>
                    <Card
                      className={classes.product}
                      style={{
                        margin: "6px 8px",
                      }}
                      // title={product.title}
                      cover={
                        <Carousel
                          slidesToShow={1}
                          arrows={true}
                          nextArrow={<ArrowRightOutlined />}
                          prevArrow={<ArrowLeftOutlined />}
                        >
                          {product.images.map(
                            (
                              img: { url: string | undefined },
                              i: Key | null | undefined
                            ) => {
                              return (
                                <div key={i} style={{ width: "250px" }}>
                                  <Image src={img.url} alt="" />
                                </div>
                              );
                            }
                          )}
                        </Carousel>
                      }
                      onClick={() => {
                        console.log("HERE");
                        router.push(`/Product/${product._id}`);
                      }}
                    >
                      <ProductOverview
                        title={product.title}
                        price={product.price}
                        discountedPrice={product.discountedPrice}
                        discount={discountPercentage(
                          product.price,
                          product.discountedPrice
                        )}
                        currency={product.currency}
                      />
                    </Card>
                  </Col>
                );
              })}
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AllProducts;
