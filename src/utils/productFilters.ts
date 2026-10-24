import type { FiltersState } from './parseCatalogParams';

export function isAnyFilter(filters: FiltersState) {
  return Boolean(
    filters.flowerTypes.length ||
    filters.price.min != null ||
    filters.price.max != null ||
    filters.colors.length ||
    filters.bouquetTypes.length ||
    filters.numberStems.length ||
    filters.height.min != null ||
    filters.height.max != null ||
    filters.occasions.length
  );
}
