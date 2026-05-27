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

  discount?: number;
}
