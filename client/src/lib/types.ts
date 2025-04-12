export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  category: string;
  imageUrl: string;
  tag?: string;
  colors: string[];
  isNew: boolean;
  isSale: boolean;
  isLimited: boolean;
}

export interface Collection {
  id: number;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
}
