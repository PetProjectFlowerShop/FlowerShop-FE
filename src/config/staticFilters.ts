export type RangeType = {
  min: number;
  max: number;
};

export type NumberStem = {
  value: string;
  label: string;
};

type StaticFilters = {
  price: RangeType;
  height: RangeType;
  numberStems: NumberStem[];
};

export const staticFilters: StaticFilters = {
  price: {
    min: 0,
    max: 800,
  },
  height: {
    min: 20,
    max: 200,
  },
  numberStems: [
    { value: 'little', label: '3-15' },
    { value: 'middle', label: '15-51' },
    { value: 'large', label: '51-101' },
    { value: 'extraLarge', label: '101-201' },
    { value: 'huge', label: '201+' },
  ],
};
