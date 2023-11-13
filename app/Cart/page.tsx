"use client";
import { Row, Col, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import classes from "./styles.module.css";
import Title from "antd/es/typography/Title";
import { CartItem } from "@components/CartItem/CartItem";

const { Text } = Typography;

export default function Cart() {
  return (
    <Row>
      <Col offset={6} span={12}>
        <div className={classes.block + " " + classes.flex_center}>
          <Row gutter={[0, 32]}>
            <Col span={24}>
              <div className={classes.flex_center}>
                <ShoppingCartOutlined
                  style={{ fontSize: "64px", color:'52c41a' }}
                />
                <Title style={{ margin: 0, color: "#52c41a" }}>
                  Your Items
                </Title>
              </div>
            </Col>
            <Col span={24}>
              <div className={classes.flex_center}>
                <CartItem />
                {/* <Text>
                  We have received your payment and your order is placed.
                </Text> */}
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}
