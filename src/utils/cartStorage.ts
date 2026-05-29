import type { CartItem } from '@/types/cartItem';

const CART_KEY = 'cart';

export const getCart = (): CartItem[] => {
  try {
    const cart = localStorage.getItem(CART_KEY);

    if (!cart) {
      return [];
    }

    return JSON.parse(cart) as CartItem[];
  } catch (error) {
    console.error('Error reading cart', error);
    return [];
  }
};

export const saveCart = (cart: CartItem[]): void => {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart', error);
  }
};
