import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import AccessoriesSection from '../home/AccessoriesSection';
import { SectionHeader } from './SectionHeader';
import { CartItemView } from './CartItemView';
import type { CartItemType } from './CartItemType';
import { useNavigate } from 'react-router-dom';

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
};

type FormValues = {
  email: string;
};

interface CartFormProps {
  cartItems: CartItemType[];
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
        <SectionHeader
          title="Cart"
          subtitle="Your cart is empty. Let’s find something beautiful."
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleGoToCatalog}>
          To catalog
        </Button>
      </div>
    );
  }

  const totalSum = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const onSubmit = (data: FormValues) => {
    console.log('Дані форми:', data, cartItems);
    onClose();
  };

  return (
    <div style={containerStyles}>
      <SectionHeader title="Cart" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
      >
        <div
          style={{
            maxHeight: '150px',
            overflowY: cartItems.length > 3 ? 'auto' : 'visible',
            marginBottom: '20px',
            borderBottom: '1px solid #eee',
          }}
        >
          {cartItems.map((item) => (
            <CartItemView key={item.id} item={item} />
          ))}
        </div>

        <div style={{ flexGrow: 1 }}>
          <AccessoriesSection />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '2px solid #000',
          }}
        >
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Total: {totalSum} ₴</div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginLeft: '20px', padding: '10px 40px' }}
          >
            Submit the order
          </Button>
        </div>
      </form>
    </div>
  );
}
