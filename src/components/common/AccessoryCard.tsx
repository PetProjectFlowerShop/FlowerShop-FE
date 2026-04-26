import { Box, Typography, IconButton } from '@mui/material';
import { Icon } from './Icon';

export interface Accessory {
  id: string;
  title: string;
  price: number;
  imgURL: string;
}

interface AccessoryCardProps {
  item: Accessory;
  currencySymbol?: string;
  onAddToCart?: (id: string) => void;
}

export const AccessoryCard = ({ item, currencySymbol = '$', onAddToCart }: AccessoryCardProps) => {
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
        src={item.imgURL}
        alt={item.title}
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
        <Typography variant="body1" color="text.primary">
          {item.title}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" component="span">
            {currencySymbol}
            {item.price}
          </Typography>

          <IconButton
            onClick={() => onAddToCart?.(item.id)}
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
