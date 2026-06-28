import { Box, Typography, IconButton, Select, MenuItem, Stack } from '@mui/material';
import type { CartItem } from '@/store/cart.store';
import { Icon } from './Icon';
import card_temp from '@/assets/images/card_temp.svg';

interface CartItemViewProps {
  item: CartItem;
}

export const CartItemView = ({ item }: CartItemViewProps) => {
  const product = item.product;
  const title = product?.title || 'Unknown Product';
  const price = product?.price || 0;
  const discount = product?.discount || 0;

  const imageUrl = product?.images?.[0] || card_temp;

  const handleRemove = () => console.log('Remove item:', product?.id);
  const handleIncrease = () => console.log('Increase quantity');
  const handleDecrease = () => console.log('Decrease quantity');

  const handleWrapChange = (event: unknown) => console.log('Change wrap to:', event.target.value);

  const currentWrap = item.wrapType || 'Kraft Paper Wrap (Free)';
  const oldPrice = discount ? Math.round(price / (1 - discount / 100)) : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
        alignItems: 'stretch',
      }}
    >
      {/* Зображення товару */}
      <Box
        component="img"
        src={imageUrl}
        alt={title}
        sx={{
          width: '195px',
          height: '154px',
          objectFit: 'cover',
          borderRadius: '12px',
          flexShrink: 0,
        }}
      />

      {/* Інформація про товар */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
        }}
      >
        {/* Рядок 1: Назва та кнопка видалення */}
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0 }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 400, fontSize: '1.1rem', color: 'text.primary' }}
          >
            {title}
          </Typography>
          <IconButton size="small" onClick={handleRemove}>
            <Icon name="close" width={20} height={20} />
          </IconButton>
        </Box>

        <Box paddingRight={8} display={'grid'} gap={3}>
          {/* Рядок 2: Вибір пакування (Select) */}
          <Box>
            <Select
              value={currentWrap}
              onChange={handleWrapChange}
              size="small"
              sx={{
                borderRadius: '20px',
                height: '44px',
                fontSize: '14px',
                paddingLeft: '12px',
                minWidth: '274px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'text.primary',
                },
              }}
            >
              <MenuItem value={currentWrap}>{currentWrap}</MenuItem>
            </Select>
          </Box>

          {/* Рядок 3: Ціна та Лічильник кількості */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box display={'flex'} gap={2}>
              {oldPrice && (
                <Typography
                  variant="caption"
                  component="span"
                  color="text.secondary"
                  sx={{
                    textDecoration: 'line-through',
                  }}
                >
                  ${oldPrice}
                </Typography>
              )}

              <Typography
                variant="h4"
                component="span"
                color={oldPrice ? 'primary.main' : 'text.primary'}
              >
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
