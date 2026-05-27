import type { FiltersState } from '../types/filter';
import {
  type BouquetType,
  type ColorType,
  type FlowerType,
  type OccasionType,
} from '../types/product';
import type { SortOption } from '../types/sort';
import { getArrayParam, getNumberParam, getStringParam } from './searchParams';

export function parseProductFilters(params: URLSearchParams) {
  const parsedPage = Number(params.get('page'));
  return {
    type: getArrayParam<FlowerType>(params, 'type'),
    color: getArrayParam<ColorType>(params, 'color'),
    bouquetType: getArrayParam<BouquetType>(params, 'bouquetType'),
    occasion: getArrayParam<OccasionType>(params, 'occasion'),
    numberStems: getArrayParam(params, 'numberStems'),

    sort: getStringParam<SortOption>(params, 'sort', 'top'),

    priceMin: getNumberParam(params, 'priceMin'),
    priceMax: getNumberParam(params, 'priceMax'),

    heightMin: getNumberParam(params, 'heightMin'),
    heightMax: getNumberParam(params, 'heightMax'),
    page: Number.isNaN(parsedPage) || parsedPage < 1 ? 1 : parsedPage,
  };
}

export function isAnyFilterActive(filters: FiltersState) {
  return Boolean(
    filters.type.length ||
    filters.color.length ||
    filters.bouquetType.length ||
    filters.occasion.length ||
    filters.numberStems.length ||
    filters.priceMin ||
    filters.priceMax ||
    filters.heightMin ||
    filters.heightMax
  );
}
