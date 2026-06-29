import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import { CartItemView } from './CartItemView';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import type { CartItem } from '@/store/cart.store';
import accessories from '@/assets/images/accessories.webp';
import { CartAccessories } from './CartAccessories';
import { sampleCatalogProducts } from '@/api/mock-data/sampleCatalogProducts';

const MOCK_ACCESSORIES = [
  { id: '1', title: 'Vase Perfeqta', price: 28, imgURL: accessories },
  { id: '2', title: 'Candle Floria', price: 23, imgURL: accessories },
  { id: '3', title: 'Flori Frame', price: 12, imgURL: accessories },
  { id: '4', title: 'Rosie Candle', price: 18, imgURL: accessories },
  { id: '5', title: 'Aroma Stick', price: 15, imgURL: accessories },
];

type FormValues = {
  email: string;
};

interface CartFormProps {
  cartItems: CartItem[];
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

export function CartForm({ cartItems, onClose }: CartFormProps) {
  const { handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();

  const handleGoToCatalog = () => {
    onClose();
    navigate('/catalog');
  };

  if (cartItems.length === 0) {
    return (
      <Box sx={rootContainerSx}>
        <Typography variant="h2">Cart</Typography>
        <Typography variant="body1">Your cart is empty. Let’s find something beautiful.</Typography>
        <Button variant="contained" color="primary" fullWidth onClick={handleGoToCatalog}>
          To catalog
        </Button>
      </Box>
    );
  }

  const totalSum = cartItems.reduce((sum, item) => {
    const product = sampleCatalogProducts.find((p) => p.id === item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  const onSubmit = (data: FormValues) => {
    console.log('Order', data, cartItems);
    onClose();
  };

  return (
    <Box sx={rootContainerSx}>
      <Typography variant="h2">Cart</Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            maxHeight: '440px',
            overflowY: 'auto',
            marginBottom: '24px',
            paddingRight: '8px',
          }}
        >
          {cartItems.map((item) => (
            <CartItemView key={item.productId} item={item} />
          ))}
        </Box>

        <Box sx={{ mt: 2, minWidth: 0, width: '100%' }}>
          {<CartAccessories accessories={MOCK_ACCESSORIES} />}
        </Box>

        <Box
          sx={{
            borderTop: 1,
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
            marginBottom: '20px',
            paddingTop: '4px',
          }}
        >
          <Typography variant="body1" color={'text.primary'}>
            Total:
          </Typography>
          <Typography variant="h4" color={'text.primary'}>
            ${totalSum}
          </Typography>
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit the order
        </Button>
      </Box>
    </Box>
  );
}
