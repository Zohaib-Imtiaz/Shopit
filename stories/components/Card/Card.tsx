import { Card as AntCard, CardProps } from "antd";
import { ReactNode } from "react";

export const Card = (props: CardProps & { children: ReactNode }) => {
  return <AntCard {...props}>{props.children}</AntCard>;
};
