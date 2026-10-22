export type CheckboxFilterKey = 'flowerTypes' | 'colors' | 'bouquetTypes' | 'occasions';
export type RangeFilterKey = 'price' | 'height';
export type ToggleFilterKey = 'numberStems';

type FilterConfigItem =
  | {
      key: CheckboxFilterKey;
      name: string;
      type: 'checkbox';
    }
  | {
      key: RangeFilterKey;
      name: string;
      type: 'range';

      format: (min: number, max: number) => string;
    }
  | {
      key: ToggleFilterKey;
      name: string;
      type: 'toggle';
    };

export const filterConfig: FilterConfigItem[] = [
  {
    key: 'flowerTypes',
    name: 'Flower',
    type: 'checkbox',
  },
  {
    key: 'price',
    name: 'Price Range ($)',
    type: 'range',
    format: (min, max) => `$${min}-$${max}`,
  },
  {
    key: 'colors',
    name: 'Color',
    type: 'checkbox',
  },
  {
    key: 'bouquetTypes',
    name: 'Type of bouquet',
    type: 'checkbox',
  },
  {
    key: 'numberStems',
    name: 'Number of Stems',
    type: 'toggle',
  },
  {
    key: 'height',
    name: 'Bouquet Height (sm)',
    type: 'range',
    format: (min, max) => `cm${min}-cm${max}`,
  },
  {
    key: 'occasions',
    name: 'Occasion',
    type: 'checkbox',
  },
];
