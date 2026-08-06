import type { QueryClient } from '@tanstack/react-query';
import type { fetchProducts } from '@/api/products';
import type { ProductCardType } from '@/types/product';
import { mergeUniqueProducts } from '@/utils/mergeUniqueProducts';
import type { FiltersState } from '@/types/filter';

type ProductsResponse = Awaited<ReturnType<typeof fetchProducts>>;
type ProductQueryFilters = Omit<FiltersState, 'page'>;
type Args = {
  queryClient: QueryClient;
  filters: ProductQueryFilters;
  currentPage: number;
  feedAnchorPage: number;
};

export function getProductsFromCache({
  queryClient,
  filters,
  currentPage,
  feedAnchorPage,
}: Args): ProductCardType[] {
  const result: ProductCardType[] = [];

  const isFeedMode = feedAnchorPage < currentPage;

  if (isFeedMode) {
    for (let page = feedAnchorPage; page <= currentPage; page++) {
      const cached = queryClient.getQueryData<ProductsResponse>(['products', filters, page]);

      if (cached?.items) {
        result.push(...cached.items);
      }
    }
  } else {
    const cached = queryClient.getQueryData<ProductsResponse>(['products', filters, currentPage]);

    if (cached?.items) {
      result.push(...cached.items);
    }
  }

  return mergeUniqueProducts(result);
}
