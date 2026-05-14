import type { FiltersState } from '../types/filter';

export const fetchProducts = async (filters: FiltersState) => {
  const params = new URLSearchParams();

  if (filters.type?.length) {
    params.append('type', filters.type.join(','));
  }

  if (filters.color?.length) {
    params.append('color', filters.color.join(','));
  }

  if (filters.bouquetType?.length) {
    params.append('bouquetType', filters.bouquetType.join(','));
  }

  if (filters.occasion?.length) {
    params.append('occasion', filters.occasion.join(','));
  }

  if (filters.numberStems.length) {
    params.append('numberStems', filters.numberStems.join(','));
  }

  if (filters.sort) {
    params.append('sort', filters.sort);
  }

  if (filters.priceMin != null) {
    params.append('priceMin', String(filters.priceMin));
  }

  if (filters.priceMax != null) {
    params.append('priceMax', String(filters.priceMax));
  }

  if (filters.heightMin != null) {
    params.append('heightMin', String(filters.heightMin));
  }

  if (filters.heightMax != null) {
    params.append('heightMax', String(filters.heightMax));
  }

  const res = await fetch(`/api/products?${params.toString()}`);
  return res.json();
};
