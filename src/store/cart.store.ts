import type { Product } from '@/types/product';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  product: Product;
  wrapType: string;
  quantity: number;
};

type CartState = {
  items: Record<string, CartItem>;
  addToCart: (product: Product, wrapType: string, quantity: number) => void;
  clear: () => void;
};

const getCartItemId = (productId: string, wrapType: string) => `${productId}_${wrapType}`;

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: {},

      addToCart: (product, wrapType, quantity) =>
        set((state) => {
          const id = getCartItemId(product.id, wrapType);
          const existing = state.items[id];

          return {
            items: {
              ...state.items,
              [id]: {
                product,
                wrapType,
                quantity: (existing?.quantity ?? 0) + quantity,
              },
            },
          };
        }),

      clear: () => set({ items: {} }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
