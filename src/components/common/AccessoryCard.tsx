import { Box, Typography, IconButton } from '@mui/material';
import { Icon } from './Icon';
import { useCartStore } from '@/store/cart.store';

export interface Accessory {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface AccessoryCardProps {
  item: Accessory;
  currencySymbol?: string;
}

export const AccessoryCard = ({ item, currencySymbol = '$' }: AccessoryCardProps) => {
  const addItemToCart = useCartStore((store) => store.addToCart);
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '#F5E1E4',
        borderRadius: '16px',
        padding: '8px',
        gap: '16px',
        alignItems: 'stretch',
        height: '100%',
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box
        component="img"
        src={item.imageUrl}
        alt={item.name}
        sx={{
          width: '100px',
          height: '100px',
          borderRadius: '12px',
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
          py: '4px',
          pr: '8px',
        }}
      >
        <Typography variant="body" color="text.primary">
          {item.name}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" component="span">
            {currencySymbol}
            {item.price}
          </Typography>

          <IconButton
            onClick={() =>
              addItemToCart({
                type: 'accessory',
                productId: item.id,
                quantity: 1,
                productPrice: item.price,
              })
            }
            size="small"
            sx={{ color: 'text.primary' }}
          >
            <Icon name="shopping-cart" width={24} height={24} fill="currentColor" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
