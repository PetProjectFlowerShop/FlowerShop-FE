import { useQuery } from '@tanstack/react-query';

import { useCartStore } from '@/store/cart.store';
import { getProductByIds } from '@/api/flowers';
import { MOCK_ACCESSORIES } from '@/api/mock-data/mockAccessories';

export function useEnrichedCart() {
  const items = useCartStore((state) => state.items);

  const cartItems = Object.values(items);

  const productIds = [
    ...new Set(cartItems.filter((item) => item.type === 'product').map((item) => item.productId)),
  ];

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cart-products', productIds.join(',')],
    queryFn: () => getProductByIds({ ids: productIds }),
    enabled: productIds.length > 0,
  });

  if (isLoading) {
    return {
      enrichedCartItems: [],
      isLoading,
      error,
    };
  }

  const enrichedCartItems = cartItems.map((cartItem) => {
    if (cartItem.type === 'accessory') {
      const accessory = MOCK_ACCESSORIES.find(
        (accessory) => Number(accessory.id) === cartItem.productId
      );

      if (!accessory) {
        throw new Error(`Accessory ${cartItem.productId} from cart was not found`);
      }

      return {
        ...cartItem,
        product: {
          id: accessory.id,
          name: accessory.name,
          price: accessory.price,
          imageUrl: accessory.imageUrl,
        },
      };
    }

    const product = products?.find((product) => product.id === cartItem.productId);

    if (!product) {
      throw new Error(`Product ${cartItem.productId} from cart was not returned by API`);
    }

    return {
      ...cartItem,
      product,
    };
  });

  return {
    enrichedCartItems,
    isLoading,
    error,
  };
}
