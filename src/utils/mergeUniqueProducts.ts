import type { Product } from '../types/product';

export function mergeUniqueProducts(products: Product[]) {
  return Array.from(new Map(products.map((p) => [p.id, p])).values());
}
