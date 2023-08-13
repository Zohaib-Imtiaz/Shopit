import { Tag } from "antd";

interface ProductOverviewProps {
    name: string,
    price: number,
    discountedPrice: number,
    discount: number,
    currency?: string,
}

export const ProductOverview = ({name, price, discountedPrice, discount}: ProductOverviewProps) => {
  return (
    <>
      <h2>{name}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{discountedPrice}</span>
        <Tag color="green">{discount}% Off</Tag>
      </div>
      <span>{price}</span>
    </>
  );
};
