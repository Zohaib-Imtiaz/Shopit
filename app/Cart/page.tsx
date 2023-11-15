"use client";
import { Row, Col, Typography } from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import classes from "./styles.module.css";
import Title from "antd/es/typography/Title";
import { CartItem } from "@components/CartItem/CartItem";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, getCart, increment, remove } from "@/store/slices/cart";
import { CartItemInterface } from "@/TypesAndInterfaces/Cart";
import { Button } from "@components/Button/Button";

const { Text } = Typography;

export default function Cart() {
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  const onAdd = (index: number) => {
    dispatch(increment(index));
  };

  const onSubtract = (index: number) => {
    dispatch(decrement(index));
  };

  const onRemove = (index: number) => {
    dispatch(remove(index));
  };

  return (
    <Row>
      <Col offset={6} span={12}>
        <div className={classes.block + " " + classes.flex_center}>
          <Row gutter={[0, 32]}>
            <Col span={24}>
              <div className={classes.flex_center}>
                <ShoppingCartOutlined
                  style={{ fontSize: "64px", color: "52c41a" }}
                />
                <Title style={{ margin: 0, color: "#52c41a" }}>
                  Your Items
                </Title>
              </div>
            </Col>
            <Col offset={4} span={18}>
              {cart.length > 0 ? (
                cart.map((item: CartItemInterface, index: number) => {
                  return (
                    <div key={index} className={classes.flex_center}>
                      <CartItem
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                        onAdd={() => onAdd(index)}
                        onSubtract={() => onSubtract(index)}
                      />
                      <Button
                        icon={<DeleteOutlined />}
                        type="primary"
                        danger
                        onClick={() => onRemove(index)}
                      ></Button>
                    </div>
                  );
                })
              ) : (
                <div className={classes.flex_center}>
                  <Text>Your cart is empty</Text>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}
