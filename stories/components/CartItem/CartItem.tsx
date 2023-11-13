import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "@components/Button/Button";
import { Col, Image, Input, Row, Skeleton, Typography } from "antd";
import { useState } from "react";
import classes from "./CartItem.module.css";

const { Text, Title } = Typography;

interface CartItemProps {
  image?: string;
  title?: string;
  price?: number;
  quantity?: number;
  onAdd?: (newQuantity: number) => void;
  onSubtract?: (newQuantity: number) => void;
  stock?: number;
}

export const CartItem = ({
  image,
  title,
  price,
  quantity,
  stock,
  onAdd,
  onSubtract,
}: CartItemProps) => {
  const [quanty, setQuanty] = useState(quantity ?? 0);

  const add = () => {
    setQuanty((prev) => prev + 1);
    if (onAdd) {
      onAdd(quanty + 1);
    }
  };
  const reduce = () => {
    setQuanty((prev) => prev - 1);
    if (onSubtract) {
      onSubtract(quanty - 1);
    }
  };
  return (
    <Row gutter={[32, 32]} className={classes.item}>
      <Col span={8}>
        {image ? (
          <Image src={image} alt="item" />
        ) : (
          <Skeleton.Image active={false} />
        )}
      </Col>
      <Col span={8}>
        <Title level={5}>{title ?? "Product Name"}</Title>
        <Text>{price ?? "$ Price"}</Text>
      </Col>
      <Col span={8}>
        <div className={classes.flex_center}>
          <Button
            type="primary"
            icon={<MinusOutlined />}
            onClick={reduce}
            disabled={quanty === 0}
          />
          <Input value={quanty} />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={add}
            disabled={quanty === stock}
          />
        </div>
      </Col>
    </Row>
  );
};
