import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  productId: string;
  wrapType: string;
  quantity: number;
};

type CartState = {
  items: Record<string, CartItem>;
  addToCart: (productId: string, wrapType: string, quantity: number) => void;
  clear: () => void;
};

const getCartItemId = (productId: string, wrapType: string) => `${productId}_${wrapType}`;

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: {},

      addToCart: (productId, wrapType, quantity) =>
        set((state) => {
          const id = getCartItemId(productId, wrapType);
          const existing = state.items[id];

          return {
            items: {
              ...state.items,
              [id]: {
                productId,
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
