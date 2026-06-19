import type { Product } from '@/types/product';

export interface CartItemType extends Product {
  quantity: number;
}

export const CartItemType = () => {
  return <div>CartItemType</div>;
};
