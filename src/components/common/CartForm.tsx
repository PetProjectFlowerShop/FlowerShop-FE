import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
// import AccessoriesSection from '../home/AccessoriesSection';
import { CartItemView } from './CartItemView';
// import type { CartItemType } from './CartItemType';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import type { CartItem } from '@/store/cart.store';
import { AccessoriesCarousel } from './AccessoriesCarousel';
import accessories from '@/assets/images/accessories.webp';
const MOCK_ACCESSORIES = [
  { id: '1', title: 'Vase Perfeqta', price: 28, imgURL: accessories },
  { id: '2', title: 'Candle Floria', price: 23, imgURL: accessories },
  { id: '3', title: 'Flori Frame', price: 12, imgURL: accessories },
  { id: '4', title: 'Rosie Candle', price: 18, imgURL: accessories },
  { id: '5', title: 'Aroma Stick', price: 15, imgURL: accessories },
];

const containerStyles: React.CSSProperties = {
  width: '708px',
  height: '100%',
  paddingTop: '40px',
  paddingRight: '72px',
  paddingBottom: '82px',
  paddingLeft: '72px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

type FormValues = {
  email: string;
};

interface CartFormProps {
  cartItems: CartItem[];
  onClose: () => void;
}

export function CartForm({ cartItems, onClose }: CartFormProps) {
  const { handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();

  const handleGoToCatalog = () => {
    onClose();
    navigate('/catalog');
  };

  if (cartItems.length === 0) {
    return (
      <div style={containerStyles}>
        <Typography variant="h2">Cart</Typography>
        <Typography variant="body1">Your cart is empty. Let’s find something beautiful.</Typography>
        <Button variant="contained" color="primary" fullWidth onClick={handleGoToCatalog}>
          To catalog
        </Button>
      </div>
    );
  }

  const totalSum = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const onSubmit = (data: FormValues) => {
    console.log('Дані форми:', data, cartItems);
    onClose();
  };

  return (
    <div style={containerStyles}>
      <Typography variant="h2">Cart</Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          borderTop: '1px solid divider',
          borderBottom: '1px solid divider',
        }}
      >
        <div
          style={{
            maxHeight: '350px',
            overflowY: 'auto',
            marginBottom: '24px',
            paddingRight: '8px',
          }}
        >
          {cartItems.map((item) => (
            <CartItemView key={item.product?.id} item={item} />
          ))}
        </div>

        <div style={{ flexGrow: 1 }}>
          <Typography>Add Accessories</Typography>
          <AccessoriesCarousel accessories={MOCK_ACCESSORIES} />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            paddingTop: '20px',
          }}
        >
          <Typography variant="body1" color={'text.primary'}>
            Total:
          </Typography>
          <Typography variant="h4" color={'text.primary'}>
            ${totalSum}
          </Typography>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginLeft: '20px', padding: '10px 40px' }}
        >
          Submit the order
        </Button>
      </form>
    </div>
  );
}
