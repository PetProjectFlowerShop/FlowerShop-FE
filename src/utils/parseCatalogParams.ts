import type { CheckboxFilterKey, RangeFilterKey, ToggleFilterKey } from '@/config/filterConfig';
import { getArrayParam, getNumberParam } from './searchParams';

type RangeValue = {
  min: number | undefined;
  max: number | undefined;
};

export type FiltersState = {
  [K in CheckboxFilterKey]: number[];
} & {
  [K in RangeFilterKey]: RangeValue;
} & {
  [K in ToggleFilterKey]: string[];
};

export function parseCatalogFilters(params: URLSearchParams): { filters: FiltersState } {
  return {
    filters: {
      flowerTypes: getArrayParam(params, 'flowerTypes').map(Number),
      price: {
        min: getNumberParam(params, 'minPrice'),
        max: getNumberParam(params, 'maxPrice'),
      },

      colors: getArrayParam(params, 'colors').map(Number),
      bouquetTypes: getArrayParam(params, 'bouquetTypes').map(Number),
      numberStems: getArrayParam(params, 'numberStems'),
      height: {
        min: getNumberParam(params, 'minHeight'),
        max: getNumberParam(params, 'maxHeight'),
      },

      occasions: getArrayParam(params, 'occasions').map(Number),
    },
  };
}
