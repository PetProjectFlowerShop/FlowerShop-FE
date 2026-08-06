import type { ProductCardType } from '../types/product';

export const craftPackaging = {
  key: 'craft',
  price: 0,
} as const;

export const luxuryPackaging = {
  key: 'luxury',
  price: 1,
} as const;

export const ecoPackaging = {
  key: 'eco',
  price: 1,
} as const;

export const goldPackaging = {
  key: 'gold',
  price: 2,
} as const;

export const silkPackaging = {
  key: 'silk',
  price: 2,
} as const;

export const boxPackaging = {
  key: 'box',
  price: 0,
} as const;

export const basketPackaging = {
  key: 'basket',
  price: 0,
} as const;

export const products: ProductCardType[] = [
  {
    id: 1,
    name: 'Rose',
    price: 15,
    imageUrl: '',
    isNew: false,
    isPopular: false,
    isSeasonOffer: false,
    isRecommended: false,
  },
];
