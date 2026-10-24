import type { NormalizedFilters } from './normalizeFilters';

export const getArrayParam = (params: URLSearchParams, key: string): string[] => {
  const value = params.get(key);
  if (!value) return [];

  return value.split(',').map((v) => v.trim());
};

export const getNumberParam = (params: URLSearchParams, key: string): number | undefined => {
  const value = params.get(key);
  return value !== null ? Number(value) : undefined;
};

export const getStringParam = <T extends string>(
  params: URLSearchParams,
  key: string,
  fallback: T
): T => {
  const value = params.get(key);
  return (value as T) ?? fallback;
};

export function toSearchParams(filters: NormalizedFilters) {
  const params = new URLSearchParams();

  filters.flowerTypes?.forEach((id) => {
    params.append('flowerTypeId', String(id));
  });

  filters.colors?.forEach((id) => {
    params.append('colorId', String(id));
  });

  filters.bouquetTypes?.forEach((id) => {
    params.append('bouquetTypeId', String(id));
  });

  filters.occasions?.forEach((id) => {
    params.append('occasionIds', String(id));
  });

  // filters.numberStems?.forEach((value) => { TODO: uncomment when API will be ready
  //   params.append('numberStems', value);
  // });

  if (filters.price?.min !== undefined) {
    params.set('minPrice', String(filters.price.min));
  }

  if (filters.price?.max !== undefined) {
    params.set('maxPrice', String(filters.price.max));
  }

  if (filters.height?.min !== undefined) {
    params.set('minHeight', String(filters.height.min));
  }

  if (filters.height?.max !== undefined) {
    params.set('maxHeight', String(filters.height.max));
  }

  return params;
}
