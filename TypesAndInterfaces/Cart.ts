export interface CartItemInterface {
  image: string;
  title: string;
  price: number;
  quantity: number;
  stock?: number;
}

export type Cart = CartItemInterface[];
