export interface ProductInterface {
  title: string;
  images: string[];
  code: string;
  currency: string;
  price: number;
  selling?: boolean;
  quantity?: number;
  category?: string;
  discountedPrice?: number,
  discount?: number,
}

export type ProductOverviewType = Omit<ProductInterface, 'selling' | 'quantity' | 'code' | 'images'| 'category'>