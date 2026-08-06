import type { ProductCardType } from '@/types/product';
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
