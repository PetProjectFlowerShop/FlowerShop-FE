export type FlowerType = { id: number; name: string };
export type ColorType = { id: number; name: string };
export type PackagingType = { id: number; name: string; price: number };
export type BouquetType = {
  id: number;
  name: string;
  packagingTypes: PackagingType[];
};
export type ProductImageType = {
  id: number;
  imageUrl: string;
  isMain: boolean;
  productId: number;
};

export interface ProductBase {
  id: number;
  name: string;
  price: number;

  isNew: boolean;
  isPopular: boolean;
  isSeasonOffer: boolean;

  discountPercent?: number;
}

export interface ProductCardType extends ProductBase {
  imageUrl: string;

  isRecommended: boolean;
}

export interface ProductDetails extends ProductBase {
  description: string;
  quantity: number;
  stemsCount: number;
  isAvailable: boolean;
  height: number;
  flowerTypes: FlowerType[];
  colors: ColorType[];
  bouquetType: BouquetType;
  images: ProductImageType[];
}
