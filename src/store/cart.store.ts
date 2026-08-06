import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  productId: number;

  quantity: number;
};

type CartState = {
  items: Record<string, CartItem>;
  addToCart: (productId: number, quantity: number) => void;
  clear: () => void;
};

const getCartItemId = (productId: number) => `${productId}`;

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: {},

      addToCart: (productId, quantity) =>
        set((state) => {
          const id = getCartItemId(productId);
          const existing = state.items[id];

          return {
            items: {
              ...state.items,
              [id]: {
                productId,

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
