export type FlowerType =
  | 'alstroemeria'
  | 'amaryllis'
  | 'anemone'
  | 'astilbe'
  | 'calla-lily'
  | 'carnation'
  | 'chrysanthemum'
  | 'freesia'
  | 'hydrangea'
  | 'lilac'
  | 'lily'
  | 'limonium'
  | 'lisianthus'
  | 'orchid'
  | 'peony'
  | 'ranunculus'
  | 'rose'
  | 'stock';
export type ColorType =
  | 'blue'
  | 'cream'
  | 'green'
  | 'mixed'
  | 'pink'
  | 'purple'
  | 'red'
  | 'white'
  | 'yellow';
export type OccasionType =
  | 'birthday'
  | 'wedding'
  | 'engagement'
  | 'anniversary'
  | 'thank'
  | 'womensDay'
  | 'valentineDay';
export type BouquetType = 'mono' | 'mixed' | 'basket' | 'box';
export type PackagingKeyType = 'craft' | 'luxury' | 'eco' | 'gold' | 'silk' | 'box' | 'basket';
export type PackagingType = {
  key: PackagingKeyType;
  price: number;
};

export interface Product {
  id: string;
  title: string;
  tags: string[];
  price: number;
  type: FlowerType[];
  rating: number;
  color: ColorType[];
  bouquetType: BouquetType[];
  numberStems: number;
  height: number;
  occasion: OccasionType[];

  images: string[];

  quantity: number;
  description: string;
  packagingType: PackagingType[];
  discount?: number;
}
