// import type { BouquetType, ColorType, FlowerType, OccasionType } from '../types/product';

export const FLOWER_TYPES_OPTIONS: { value: string; label: string }[] = [
  { value: 'alstroemeria', label: 'Alstroemeria' },
  { value: 'amaryllis', label: 'Amaryllis' },
  { value: 'anemone', label: 'Anemone' },
  { value: 'astilbe', label: 'Astilbe' },
  { value: 'calla-lily', label: 'Calla Lily' },
  { value: 'carnation', label: 'Carnation' },
  { value: 'chrysanthemum', label: 'Chrysanthemum' },
  { value: 'freesia', label: 'Freesia' },
  { value: 'hydrangea', label: 'Hydrangea' },
  { value: 'lilac', label: 'Lilac' },
  { value: 'lily', label: 'Lily' },
  { value: 'limonium', label: 'Limonium' },
  { value: 'lisianthus', label: 'Lisianthus' },
  { value: 'orchid', label: 'Orchid' },
  { value: 'peony', label: 'Peony' },
  { value: 'ranunculus', label: 'Ranunculus' },
  { value: 'rose', label: 'Rose' },
  { value: 'stock', label: 'Stock' },
];

export const COLOR_OPTIONS: { value: string; label: string }[] = [
  { value: 'blue', label: 'Blue' },
  { value: 'cream', label: 'Creamy' },
  { value: 'green', label: 'Green' },
  { value: 'mixed', label: 'Mixed' },
  { value: 'pink', label: 'Pink' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'white', label: 'White' },
  { value: 'yellow', label: 'Yellow' },
];

export const BOUQUET_TYPES_OPTIONS: { value: string; label: string }[] = [
  { value: 'mono', label: 'Mono Bouquet' },
  { value: 'mixed', label: 'Mixed Bouquet' },
  { value: 'basket', label: 'Flowers in a Basket' },
  { value: 'box', label: 'Flowers in a Box' },
];

export const OCCASION_OPTIONS: { value: string; label: string }[] = [
  { value: 'birthday', label: 'Birthday' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'engagement', label: 'Engagement' },
  { value: 'anniversary', label: 'Anniversary' },
  { value: 'thank', label: 'Thank You' },
  { value: 'womensDay', label: 'International Women’s Day' },
  { value: 'valentineDay', label: 'Valentine’s Day' },
];

export const NUMBER_STEMS_OPTIONS: { value: string; label: string }[] = [
  { value: '3-15', label: '3-15' },
  { value: '15-51', label: '15-51' },
  { value: '51-101', label: '51-101' },
  { value: '101-201', label: '101-201' },
  { value: '201+', label: '201+' },
];
