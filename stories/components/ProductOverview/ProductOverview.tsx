import { ProductOverviewType } from "@/TypesAndInterfaces/Product";
import { localCurrency } from "@/utils/intl";
import { Tag } from "antd";


export const ProductOverview = ({title, price, discountedPrice, discount, currency}: ProductOverviewType) => {
  return (
    <>
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{discountedPrice}</span>
        <Tag color="green">{discount}% Off</Tag>
      </div>
      <span>{localCurrency(price, currency)}</span>
    </>
  );
};
