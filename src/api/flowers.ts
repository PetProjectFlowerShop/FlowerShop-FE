import type { ProductCardType, ProductDetails, ProductFilters } from '@/types/product';
import { apiClient } from './axios';
import type { NormalizedFilters } from '@/utils/normalizeFilters';
import type { SortOption } from '@/constants/sort';
import { toSearchParams } from '@/utils/searchParams';

type CatalogProducts = {
  content: ProductCardType[];
  page: { size: number; number: number; totalElements: number; totalPages: number };
};

export async function getRecommendationsProducts() {
  const response = await apiClient.get<ProductCardType[]>('/flowers/recommendations');

  return response.data;
}

export async function getCatalogProducts() {
  const { data } = await apiClient.get<CatalogProducts>(`/flowers/search?page=0&size=12&`);
  return data.content;
}

export async function getProductById({ id }: { id: number }) {
  const { data } = await apiClient.get<ProductDetails>(`/flowers/${id}`);
  return data;
}

export async function getProductByIds({ ids }: { ids: number[] }) {
  const params = new URLSearchParams();
  ids.forEach((id) => {
    params.append('ids', String(id));
  });

  const { data } = await apiClient.get<ProductCardType[]>('/flowers/batch', {
    params,
  });

  return data;
}

export async function getProductFilters() {
  const { data } = await apiClient.get<ProductFilters>('/flowers/filters');
  return data;
}

export async function fetchProducts({
  filters,
  sort,
  page,
}: {
  filters: NormalizedFilters;
  sort: SortOption;
  page: number;
}) {
  const params = toSearchParams(filters);

  if (sort !== 'top') {
    const sortParams: Record<Exclude<SortOption, 'top'>, { sortBy: string; sortOrder: string }> = {
      'price-desc': { sortBy: 'price', sortOrder: 'desc' },
      'price-asc': { sortBy: 'price', sortOrder: 'asc' },
    };

    const { sortBy, sortOrder } = sortParams[sort];

    params.set('sortBy', sortBy);
    params.set('sortOrder', sortOrder);
  }

  params.set('page', String(page - 1));
  params.set('size', '12');

  const { data } = await apiClient.get<CatalogProducts>(`/flowers/search?${params.toString()}`);

  return data;
}
