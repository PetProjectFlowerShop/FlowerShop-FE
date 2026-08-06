import type { ProductCardType } from '../types/product';

export function mergeUniqueProducts(products: ProductCardType[]) {
  return Array.from(new Map(products.map((p) => [p.id, p])).values());
}
