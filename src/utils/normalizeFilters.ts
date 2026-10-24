import { filterConfig } from '@/config/filterConfig';
import type { FiltersState } from './parseCatalogParams';

type NormalizedRange = {
  min?: number;
  max?: number;
};

export type NormalizedFilters = {
  flowerTypes?: number[];
  colors?: number[];
  bouquetTypes?: number[];
  occasions?: number[];
  numberStems?: string[];
  price?: NormalizedRange;
  height?: NormalizedRange;
};

export function normalizeFilters(filters: FiltersState) {
  const normalized: NormalizedFilters = {};

  for (const config of filterConfig) {
    if (config.type === 'range') {
      const value = filters[config.key];

      if (value.min === undefined && value.max === undefined) continue;

      normalized[config.key] = {
        ...(value.min !== undefined && { min: value.min }),
        ...(value.max !== undefined && { max: value.max }),
      };

      continue;
    }

    if (config.type === 'checkbox') {
      const value = filters[config.key];

      if (value.length === 0) continue;

      normalized[config.key] = [...value].sort((a, b) => a - b);
      continue;
    }

    const value = filters[config.key];

    if (value.length === 0) continue;

    normalized[config.key] = [...value].sort();
  }

  return normalized;
}
