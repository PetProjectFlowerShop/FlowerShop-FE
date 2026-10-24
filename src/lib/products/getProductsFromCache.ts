import type { QueryClient } from '@tanstack/react-query';

import type { fetchProducts } from '@/api/flowers';
import type { ProductCardType } from '@/types/product';
import { mergeUniqueProducts } from '@/utils/mergeUniqueProducts';
import type { NormalizedFilters } from '@/utils/normalizeFilters';
import type { SortOption } from '@/constants/sort';

type ProductsResponse = Awaited<ReturnType<typeof fetchProducts>>;

type Args = {
  queryClient: QueryClient;
  filters: NormalizedFilters;
  sort: SortOption;
  currentPage: number;
  feedAnchorPage: number;
};

export function getProductsFromCache({
  queryClient,
  filters,
  sort,
  currentPage,
  feedAnchorPage,
}: Args): ProductCardType[] {
  const result: ProductCardType[] = [];

  const isFeedMode = feedAnchorPage < currentPage;

  if (isFeedMode) {
    for (let page = feedAnchorPage; page <= currentPage; page++) {
      const cached = queryClient.getQueryData<ProductsResponse>([
        'catalog-products',
        filters,
        sort,
        page,
      ]);

      if (cached?.content) {
        result.push(...cached.content);
      }
    }
  } else {
    const cached = queryClient.getQueryData<ProductsResponse>([
      'catalog-products',
      filters,
      sort,
      currentPage,
    ]);

    if (cached?.content) {
      result.push(...cached.content);
    }
  }

  return mergeUniqueProducts(result);
}
