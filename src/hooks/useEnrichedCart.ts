import { useMemo } from 'react';
import { useCartStore } from '@/store/cart.store';
import { getProductDetailsSync } from '@/api/mock-data/cart.service';
import type { Product } from '@/types/product';
import type { CartItem } from '@/types/cartItem';
import type { CartDisplayItem } from '@/types/cart';

export interface EnrichedCartEntry {
  cartItem: CartItem;
  product: Product;
}

const hasProductDetails = (entry: {
  cartItem: CartItem;
  product: CartDisplayItem | undefined;
}): entry is EnrichedCartEntry => {
  return entry.product !== undefined;
};

export const useEnrichedCart = () => {
  const cartItemsMap = useCartStore((state) => state.items);

  const enrichedItems = useMemo(() => {
    return Object.values(cartItemsMap)
      .map((cartItem) => ({
        cartItem,
        product: getProductDetailsSync(cartItem.productId),
      }))
      .filter(hasProductDetails);
  }, [cartItemsMap]);

  const totalSum = useMemo(() => {
    return enrichedItems.reduce((sum, { cartItem, product }) => {
      return sum + product.price * cartItem.quantity;
    }, 0);
  }, [enrichedItems]);

  return {
    items: enrichedItems,
    totalSum,
    isEmpty: enrichedItems.length === 0,
  };
};
