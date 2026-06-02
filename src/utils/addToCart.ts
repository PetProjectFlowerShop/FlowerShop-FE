import { getCart, saveCart } from '@/utils/cartStorage';

export const addToCart = (productId: string, quantity: number = 1): void => {
  const cart = getCart();

  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }

  saveCart(cart);
};
