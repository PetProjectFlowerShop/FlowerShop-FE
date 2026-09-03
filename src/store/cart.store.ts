import type { CartItem } from '@/types/cart';
import type { PackagingType } from '@/types/product';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartState = {
  items: Record<string, CartItem>;
  addToCart: (item: CartItem) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  updatePackagingType: (cartItemId: string, packagingType: PackagingType) => void;
  getTotalSum: () => number;
  removeFromCart: (cartItemId: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: {},

      addToCart: (item) =>
        set((state) => {
          const id =
            item.type === 'product'
              ? `${item.productId}-${item.packagingType.id}`
              : `${item.productId}-no-packaging`;

          const existingItem = state.items[id];

          return {
            items: {
              ...state.items,
              [id]: existingItem
                ? { ...existingItem, quantity: existingItem.quantity + item.quantity }
                : item,
            },
          };
        }),
      updateQuantity: (cartItemId, quantity) =>
        set((state) => {
          const item = state.items[cartItemId];

          if (!item) return state;

          return {
            items: {
              ...state.items,
              [cartItemId]: { ...item, quantity },
            },
          };
        }),
      updatePackagingType: (cartItemId, packagingType) =>
        set((state) => {
          const item = state.items[cartItemId];
          if (!item || item.type !== 'product') return state;

          const newCartItemId = `${item.productId}_${packagingType.id}`;

          if (newCartItemId === cartItemId) {
            return state;
          }
          const existingItem = state.items[newCartItemId];

          const newItems = { ...state.items };

          delete newItems[cartItemId];

          newItems[newCartItemId] = existingItem
            ? {
                ...existingItem,
                quantity: existingItem.quantity + item.quantity,
              }
            : {
                ...item,
                packagingType,
              };

          return {
            items: newItems,
          };
        }),
      getTotalSum: () =>
        Object.values(get().items).reduce((total, item) => {
          const itemPrice =
            item.type === 'product'
              ? item.productPrice + item.packagingType.price
              : item.productPrice;

          return total + itemPrice * item.quantity;
        }, 0),
      removeFromCart: (cartItemId) =>
        set((state) => {
          const newItems = { ...state.items };

          delete newItems[cartItemId];

          return {
            items: newItems,
          };
        }),
    }),
    { name: 'cart-storage' }
  )
);
