import type { Product } from '../../types/product';
import type { SortOption } from '../../types/sort';

type ProductSorter = (a: Product, b: Product) => number;

export const productSorters: Record<SortOption, ProductSorter> = {
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  top: (a, b) => b.rating - a.rating,
};
