"use client";

import { Col, Row } from "antd";
import classes from "./styles.module.css";
import { Card } from "@components/Card/Card";
import { ListingProductCard } from "@components/Card/Card.stories";
import { FiltersAndSorts } from "@components/Filters&Sorts/Filters&Sorts";

const allProducts = () => {
  return (
    <div className={classes.main}>
      <Row gutter={[64, 64]}>
        <Col lg={6}>
          <FiltersAndSorts returnFilters={() => {}} />
        </Col>
        <Col lg={18}>
          <Row>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_: any, i: number) => {
              return (
                <Col key={i}>
                  <Card
                    className={classes.product}
                    {...ListingProductCard.args}
                    onClick={()=> {console.log('Clicked:', i)}}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default allProducts;
