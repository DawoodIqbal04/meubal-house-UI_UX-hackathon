export interface Product {
  _id: string;
  price: number;
  name: string;
  imageUrl: string;
  slug: string;
  category: string;
}
export interface Products {
  _id: string;
  price: number;
  name: string;
  image: string[];
  description: string;
  slug: string;
  category: string;
  stock: number;
  price_id: string;
}
