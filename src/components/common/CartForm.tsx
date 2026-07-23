import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { CartItemView } from './CartItemView';
import { CartAccessories } from './CartAccessories';
import { useCartStore } from '@/store/cart.store';
import { useEnrichedCart } from '@/hooks/useEnrichedCart';
import { MOCK_ACCESSORIES } from '@/api/mock-data/mockAccessories';

type FormValues = {
  email: string;
};

interface CartFormProps {
  onClose: () => void;
}

const rootContainerSx = {
  width: { xs: '375px', sm: '640px', md: '708px' },
  height: '100%',
  px: { xs: '16px', sm: '32px', md: '60px' },
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  py: 3,
};

export function CartForm({ onClose }: CartFormProps) {
  const { handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const { items: enrichedItems, totalSum, isEmpty } = useEnrichedCart();

  const handleAddAccessoryToCart = useCallback(
    (accessoryId: string) => {
      addToCart(accessoryId, 'none', 1);
    },
    [addToCart]
  );

  const handleGoToCatalog = useCallback(() => {
    onClose();
    navigate('/catalog');
  }, [onClose, navigate]);

  const onSubmit = (data: FormValues) => {
    console.log('Order Details:', data, enrichedItems);
    onClose();
  };

  if (isEmpty) {
    return (
      <Box sx={rootContainerSx}>
        <Typography variant="h2">Cart</Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          Your cart is empty. Let’s find something beautiful.
        </Typography>
        <Button variant="contained" color="primary" fullWidth onClick={handleGoToCatalog}>
          To catalog
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={rootContainerSx}>
      <Typography variant="h2">Cart</Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
      >
        <Box sx={{ maxHeight: '440px', overflowY: 'auto', mb: 3, pr: 1 }}>
          {enrichedItems.map(({ cartItem, product }) => (
            <CartItemView
              key={`${cartItem.productId}-${cartItem.wrapType}`}
              item={cartItem}
              product={product}
            />
          ))}
        </Box>

        <Box sx={{ mt: 2, width: '100%' }}>
          <CartAccessories accessories={MOCK_ACCESSORIES} onAddToCart={handleAddAccessoryToCart} />
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

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit the order
        </Button>
      </Box>
    </Box>
  );
}
