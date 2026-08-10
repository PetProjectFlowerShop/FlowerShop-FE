import { sampleCatalogProducts } from '@/api/mock-data/sampleCatalogProducts';
import card_temp from '@/assets/images/card_temp.svg';
import type { CartItem } from '@/store/cart.store';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { Icon } from './Icon';

interface CartItemViewProps {
  item: CartItem;
}

export const CartItemView = ({ item }: CartItemViewProps) => {
  const product = sampleCatalogProducts.find((p) => p.id === item.productId);

  if (!product) return null;
  const title = product.name;
  const price = product.price;
  const discount = product.discountPercent;
  const imageUrl = card_temp;

  const handleRemove = () => console.log('Remove item:', item?.productId);
  const handleIncrease = () => console.log('Increase quantity', item?.quantity);
  const handleDecrease = () => console.log('Decrease quantity', item?.quantity);
  const oldPrice = discount ? Math.round(price / (1 - discount / 100)) : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        gap: { xs: 2, sm: 3 },
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
        alignItems: 'stretch',
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={title}
        sx={{
          width: { xs: '120px', sm: '195px' },
          height: { xs: '140px', sm: '154px' },
          objectFit: 'cover',
          borderRadius: '12px',
          flexShrink: 0,
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
          minWidth: 0,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 400, fontSize: { xs: '1rem', sm: '1.1rem' }, color: 'text.primary' }}
          >
            {title}
          </Typography>
          <IconButton size="small" onClick={handleRemove} sx={{ mt: '-4px', mr: '-4px' }}>
            <Icon name="close" width={20} height={20} />
          </IconButton>
        </Box>

        <Box pr={{ xs: 0, sm: 8 }} display="grid" gap={{ xs: 1.5, sm: 3 }}>
          <Box sx={{ paddingLeft: '12px' }}>{/* <PackageTypeSelect /> */}</Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box display="flex" gap={1} alignItems="center">
              {oldPrice && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ textDecoration: 'line-through' }}
                >
                  ${oldPrice}
                </Typography>
              )}
              <Typography variant="h4" color={oldPrice ? 'primary.main' : 'text.primary'}>
                ${price}
              </Typography>
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              sx={{
                border: '1px solid',
                borderColor: 'text.primary',
                borderRadius: '24px',
                p: '4px',
                gap: 1,
              }}
            >
              <IconButton
                size="small"
                onClick={handleDecrease}
                disabled={item.quantity <= 1}
                sx={{ p: '4px' }}
              >
                <Icon name="minus" width={16} height={16} />
              </IconButton>
              <Box
                sx={{
                  bgcolor: '#E0E3D8',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>{item.quantity}</Typography>
              </Box>
              <IconButton size="small" onClick={handleIncrease} sx={{ p: '4px' }}>
                <Icon name="add" width={16} height={16} />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
