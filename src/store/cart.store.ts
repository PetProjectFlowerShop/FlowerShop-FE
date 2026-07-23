import type { CartItem } from '@/types/cartItem';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartState = {
  items: Record<string, CartItem>;
  addToCart: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  updateWrapType: (productId: number) => void;

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

      removeFromCart: (productId) =>
        set((state) => {
          const id = getCartItemId(productId);
          const newItems = { ...state.items };
          delete newItems[id];
          return { items: newItems };
        }),

      updateQuantity: (productId) =>
        set((state) => {
          const id = getCartItemId(productId);
          if (!state.items[id]) return state;

          return {
            items: {
              ...state.items,
              [id]: {
                ...state.items[id],
              },
            },
          };
        }),

      updateWrapType: () =>
        set((state) => {
          // if (oldWrapType === newWrapType) return state;

          // const oldId = getCartItemId(productId, oldWrapType);
          // const newId = getCartItemId(productId, newWrapType);
          // const oldItem = state.items[oldId];

          // if (!oldItem) return state;

          const newItems = { ...state.items };

          // delete newItems[oldId];

          // if (newItems[newId]) {
          //   newItems[newId] = {
          //     ...newItems[newId],
          //     quantity: newItems[newId].quantity + oldItem.quantity,
          //   };
          // } else {
          //   newItems[newId] = {
          //     ...oldItem,
          //     wrapType: newWrapType,
          //   };
          // }

          return { items: newItems };
        }),

      clear: () => set({ items: {} }),
    }),
    {
      name: 'cart-storage',
    }
  )
);

export const selectCartTotalCount = (state: CartState) =>
  Object.values(state.items).reduce((sum, item) => sum + item.quantity, 0);
