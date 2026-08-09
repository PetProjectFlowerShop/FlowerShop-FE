import type { ProductCardType, ProductDetails } from '@/types/product';
import { apiClient } from './axios';

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
