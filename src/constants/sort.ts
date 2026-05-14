import type { SortOption } from '../types/sort';

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'top', label: 'Top Rated' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'price-asc', label: 'Price: Low to High' },
];
