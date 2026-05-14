import {
  BOUQUET_TYPES_OPTIONS,
  COLOR_OPTIONS,
  FLOWER_TYPES_OPTIONS,
  NUMBER_STEMS_OPTIONS,
  OCCASION_OPTIONS,
} from './filter';

export const FILTER_CONFIG = [
  { type: 'checkbox', title: 'Flower', paramKey: 'type', options: FLOWER_TYPES_OPTIONS },
  {
    type: 'range',
    title: 'Price Range ($)',
    min: 0,
    max: 200,
    minDistance: 20,
    minKey: 'priceMin',
    maxKey: 'priceMax',
    marks: [0, 50, 100, 150, 200].map((value) => ({ value })),
  },
  {
    type: 'checkbox',
    title: 'Color',
    paramKey: 'color',
    options: COLOR_OPTIONS,
  },
  {
    type: 'checkbox',
    title: 'Type of bouquet',
    paramKey: 'bouquetType',
    options: BOUQUET_TYPES_OPTIONS,
  },
  {
    type: 'toggle',
    title: 'Number of Stems',
    paramKey: 'numberStems',
    options: NUMBER_STEMS_OPTIONS,
  },
  {
    type: 'range',
    title: 'Bouquet Height (cm)',
    min: 20,
    max: 200,
    minDistance: 20,
    minKey: 'heightMin',
    maxKey: 'heightMax',
    marks: [20, 50, 100, 150, 200].map((value) => ({ value })),
  },
  {
    type: 'checkbox',
    title: 'Occasion',
    paramKey: 'occasion',
    options: OCCASION_OPTIONS,
  },
] as const;
export type FilterConfigType = typeof FILTER_CONFIG;
export type FilterConfigItem = FilterConfigType[number];
