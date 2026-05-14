import {
  BOUQUET_TYPES_OPTIONS,
  COLOR_OPTIONS,
  FLOWER_TYPES_OPTIONS,
  NUMBER_STEMS_OPTIONS,
  OCCASION_OPTIONS,
} from './filter';

export const FILTER_CHIP_CONFIG = [
  {
    type: 'multi',
    key: 'type',
    options: FLOWER_TYPES_OPTIONS,
  },
  {
    type: 'range',
    keyMin: 'priceMin',
    keyMax: 'priceMax',
    label: 'Price',
    min: 0,
    max: 200,
    format: (min: number, max: number) => `$${min} - $${max}`,
  },
  {
    type: 'multi',
    key: 'color',
    options: COLOR_OPTIONS,
  },
  {
    type: 'range',
    keyMin: 'heightMin',
    keyMax: 'heightMax',
    label: 'Height',
    min: 20,
    max: 200,
    format: (min: number, max: number) => `cm${min} - cm${max}`,
  },
  {
    type: 'multi',
    key: 'bouquetType',
    options: BOUQUET_TYPES_OPTIONS,
  },
  { type: 'multi', key: 'numberStems', options: NUMBER_STEMS_OPTIONS },
  {
    type: 'multi',
    key: 'occasion',
    options: OCCASION_OPTIONS,
  },
] as const;
