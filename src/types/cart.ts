import type { Product } from './product';

export interface CartItem {
  productId: string;
  wrapType: string;
  quantity: number;
}

export type CartDisplayItem = Pick<
  Product,
  'id' | 'title' | 'price' | 'images' | 'packagingType' | 'discount'
>;

export interface EnrichedCartEntry {
  cartItem: CartItem;
  product: CartDisplayItem;
}
