export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  color: string;
  image: string;
  category: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export type SkinTone = 'fair' | 'medium' | 'deep';

export interface ColorPalette {
  name: string;
  colors: string[];
}
