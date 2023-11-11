import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "@components/Button/Button";
import { Card } from "@components/Card/Card";
import { ProductCard } from "@components/Card/Card.stories";
import { Carousel } from "@components/Carousel/Carousel";
import { CarouselCardRow, CarouselHome } from "@components/Carousel/Carousel.stories";
import classes from './styles.module.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopit",
  description: "Ecommerce website",
};

const App = () => {
  return (
    <>
      <Carousel {...CarouselHome.args} />
      <div>
        <div className={classes.row_heading}>
          <span>Best Selling</span>
          <Button type="text">
            <a> See More <ArrowRightOutlined /> </a>
          </Button>
        </div>
        <Carousel {...CarouselCardRow.args}>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
        </Carousel>
      </div>
      <div>
        <div className={classes.row_heading}>
          <span>Latest Items</span>
          <Button type="text">
            <a> See More <ArrowRightOutlined /> </a>
          </Button>
        </div>
        <Carousel {...CarouselCardRow.args}>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
          <div>
            <Card {...ProductCard.args} />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default App;
