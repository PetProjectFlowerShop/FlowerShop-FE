export interface Product {
  id: string;
  title: string;
  imgURL: string;
  price: number;
  discount?: number;
  isFavorite: boolean;
  tags: string[];
}
