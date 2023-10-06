"use client"
import { defaultCarouselChildren } from "@/mockdata/carousels";
import { singleProduct } from "@/mockdata/products";
import { Card } from "@components/Card/Card";
import { Carousel } from "@components/Carousel/Carousel";
import { CarouselDefault } from "@components/Carousel/Carousel.stories";
import { Col, Divider, Image, Row, Tag, Typography } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { Metadata, ResolvingMetadata } from "next";
import { useRef, useState } from "react";
import classes from './styles.module.css';
import { Button } from "@components/Button/Button";
import { CreditCardOutlined, ShoppingOutlined } from "@ant-design/icons";

// type Props = {
//     params: { id: string }
//     searchParams: { [key: string]: string | string[] | undefined }
// }


// export async function generateMetadata(
//     { params, searchParams }: Props,
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//     // read route params
//     const id = params.id

//     // fetch data
//     const product = await fetch(`https://.../${id}`).then((res) => res.json())

//     // optionally access and extend (rather than replace) parent metadata
//     const previousImages = (await parent).openGraph?.images || []

//     return {
//         title: product.title,
//         openGraph: {
//             images: ['/some-specific-page-image.jpg', ...previousImages],
//         },
//     }
// }

const { Title, Text, Paragraph } = Typography

const SingleProductPage = () => {

    const [productImages, setProductImages] = useState(defaultCarouselChildren)
    const [product, setProduct] = useState(singleProduct)

    const nav1 = useRef()
    const nav2 = useRef()

    const onChange = (currentSlide: any) => {
        if (nav1.current) {
            (nav1.current as CarouselRef).goTo(currentSlide, false);
        }
    };

    return (
        <div className={classes.main}>
            <Row gutter={[64, 64]}>
                <Col md={12} >
                    <Carousel {...CarouselDefault.args} style={{ width: 'auto' }} asNavFor={nav2.current} ref={nav1} dots={false}>
                        {
                            productImages.map((slides, index) => {
                                return (
                                    <div key={index} onClick={() => onChange(index)}>
                                        <Image
                                            src={slides.img}
                                            alt=""
                                        />
                                    </div>
                                )
                            })
                        }

                    </Carousel>
                    <Carousel {...CarouselDefault.args} centerMode={false} infinite={false} slidesToShow={productImages.length < 5 ? productImages.length : 5} asNavFor={nav1.current} ref={nav2} dots={false} style={{ width: '100%' }} >
                        {
                            productImages.map((slides, index) => {
                                return (
                                    <div key={index} onClick={() => onChange(index)}>
                                        <Image
                                            preview={false}
                                            src={slides.img}
                                            alt=""
                                        />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </Col>
                <Col md={12}>
                    <Card>
                        <Title>
                            {product.title}
                        </Title>
                        <Title level={2}>{product.overview}</Title>
                        <Text delete={product.discount}>{product.currency}{product.price}</Text>
                        &emsp;
                        {
                            product.discount &&
                            <>
                                <Text>{product.currency}{product.discounted_price}</Text>
                                &ensp;
                                <Tag color="green">{product.discounted_percentage}% Off</Tag>
                            </>
                        }
                        <Divider orientation="left">Specification</Divider>
                        <ul className={classes.divided_section}>
                            {
                                product.specs.map((spec, index) => <li key={index}><Text>{spec}</Text></li>)
                            }
                        </ul>
                        <Divider orientation="left">Description</Divider>
                        <Paragraph className={classes.divided_section}>{product.description}</Paragraph>
                        <Divider />
                        <Row gutter={[16, 16]}>
                            <Col span={12}>
                                <Button type="primary" color="#2db7f5" block size="large" icon={<ShoppingOutlined style={{fontSize: "24px"}} />}>Add to bag</Button>
                            </Col>
                            <Col span={12}>
                                <Button type="primary" color="#87d068" block size="large" icon={<CreditCardOutlined style={{fontSize: "24px"}} />}>Buy Now</Button>
                            </Col>
                        </Row>
                    </Card>

                </Col>
            </Row>
        </div>
    )
}

export default SingleProductPage;