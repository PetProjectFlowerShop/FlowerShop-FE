import type { PackagingType } from './product';

type BaseCartItem = {
  productId: number;
  selectedQuantity: number;
  productPrice: number;
};

export type ProductCartItem = BaseCartItem & {
  type: 'product';
  packagingType: PackagingType;
};

export type AccessoryCartItem = BaseCartItem & {
  type: 'accessory';
};

export type CartItem = ProductCartItem | AccessoryCartItem;
