import { sampleCatalogProducts } from './sampleCatalogProducts';
import { MOCK_ACCESSORIES } from './mockAccessories';
import type { CartDisplayItem } from '@/types/cart';

const normalizedProducts: CartDisplayItem[] = sampleCatalogProducts.map((p) => ({
  id: String(p.id),
  title: p.title,
  price: p.price,
  images: p.images,
  packagingType: p.packagingType,
  discount: p.discount,
}));

const normalizedAccessories: CartDisplayItem[] = MOCK_ACCESSORIES.map((acc) => ({
  id: String(acc.id),
  title: acc.title,
  price: acc.price,
  images: [acc.imgURL],
}));

const ALL_CART_ITEMS: CartDisplayItem[] = [...normalizedProducts, ...normalizedAccessories];

export const getProductDetailsSync = (id: string): CartDisplayItem | undefined => {
  return ALL_CART_ITEMS.find((item) => item.id === String(id));
};

// 2. Асинхронна версія (заготовка на майбутнє для useQuery)
export const fetchProductsByIds = async (ids: string[]): Promise<CartDisplayItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ALL_CART_ITEMS.filter((item) => ids.includes(String(item.id))));
    }, 500);
  });
};
