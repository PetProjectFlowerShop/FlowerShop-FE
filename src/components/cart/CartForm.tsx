import { useEnrichedCart } from '@/hooks/useEnrichedCart';
import { useCartStore } from '@/store/cart.store';
import { Box, Button, Typography } from '@mui/material';
import { CartItemView } from './CartItemView';
import { CartAccessories } from './CartAccessories';
import { MOCK_ACCESSORIES } from '@/api/mock-data/mockAccessories';

export function CartForm() {
  const { enrichedCartItems, isLoading } = useEnrichedCart();
  const totalSum = useCartStore((state) => state.getTotalSum());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (enrichedCartItems.length == 0) {
    return (
      <Box>
        <Typography variant="h2">Cart</Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          Your cart is empty. Let’s find something beautiful.
        </Typography>
        <Button variant="contained" color="primary" fullWidth>
          To catalog
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h2">Cart</Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Box sx={{ maxHeight: '440px', overflowY: 'auto', mb: 3, pr: 1 }}>
          {enrichedCartItems.map((item) => {
            if (item.type === 'product') {
              return (
                <CartItemView
                  key={`${item.product?.id}-${item.packagingType.id}`}
                  type={item.type}
                  product={item.product}
                  packagingType={item.packagingType}
                  quantity={item.quantity}
                  productId={item.productId}
                />
              );
            }

            return (
              <CartItemView
                key={`${item.product.id}-no-packaging`}
                type={item.type}
                product={item.product}
                quantity={item.quantity}
                productId={item.productId}
              />
            );
          })}
        </Box>

        <Box sx={{ mt: 2 }}>
          <CartAccessories accessories={MOCK_ACCESSORIES} />
        </Box>

        <Box
          sx={{
            borderTop: 1,
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'space-between',
            my: 2,
            pt: 2,
          }}
        >
          <Typography variant="body1">Total:</Typography>
          <Typography variant="h4">${totalSum}</Typography>
        </Box>

        <Button variant="contained" color="primary" fullWidth>
          Submit the order
        </Button>
      </Box>
    </Box>
  );
}
