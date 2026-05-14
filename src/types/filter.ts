import type { BouquetType, ColorType, FlowerType, OccasionType } from './product';
import type { SortOption } from './sort';

export type FiltersState = {
  type: FlowerType[];
  color: ColorType[];
  bouquetType: BouquetType[];
  occasion: OccasionType[];

  sort: SortOption;
  numberStems: string[];
  priceMin?: number;
  priceMax?: number;
  heightMin?: number;
  heightMax?: number;
};

export type FilterKey = keyof FiltersState;
export type NumberFilterKey = {
  [K in keyof FiltersState]-?: NonNullable<FiltersState[K]> extends number ? K : never;
}[keyof FiltersState];
