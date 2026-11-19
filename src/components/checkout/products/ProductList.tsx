import { Box, Typography, Button, IconButton } from '@mui/material';
import { useCartStore } from '@/store/cart.store';
import { useEnrichedCart } from '@/hooks/useEnrichedCart';
import { useNavigate } from 'react-router-dom';
import ProductItem from './ProductItem';
import { useDrawer } from '@/hooks/useDrawer.ts';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

type Props = {
  withBorder?: boolean; // add border top and button for item and button close on Cheeckout Page
};

export function ProductList({ withBorder = false }: Props) {
  const navigate = useNavigate();
  const { toggleDrawer } = useDrawer();
  const { enrichedCartItems, isLoading } = useEnrichedCart();

  const removeFromCart = useCartStore((state) => state.removeFromCart);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (enrichedCartItems.length == 0) {
    return (
      <Box>
        <Typography variant="body" component="div" sx={{ my: 2 }}>
          Your cart is empty.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            navigate('/catalog');
          }}
        >
          Return to catalog
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ mb: 5 }} display="flex" justifyContent="space-between">
        <Typography variant="h4">Your order</Typography>
        <IconButton
          variant="default"
          aria-label={`Edit`}
          sx={{ gap: 2 }}
          onClick={toggleDrawer('cart', true)}
        >
          <EditOutlinedIcon />
          Edit
        </IconButton>
      </Box>
      <Box>
        {enrichedCartItems.map((item) => (
          <ProductItem
            key={`${item.productId}_${item.type === 'product' ? item.packagingType.id : 'no-packaging'}`}
            item={item}
            withBorder={withBorder}
            onRemove={removeFromCart}
          />
        ))}
      </Box>
    </Box>
  );
}
