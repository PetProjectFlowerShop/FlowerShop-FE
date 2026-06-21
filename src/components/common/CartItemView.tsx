import { Box, Typography, IconButton, Select, MenuItem, Stack } from '@mui/material';
import type { CartItem } from '@/store/cart.store';
import { Icon } from './Icon'; // Перевірте правильність шляху до вашого компонента Icon
import card_temp from '@/assets/images/card_temp.svg'; // Дефолтне фото

interface CartItemViewProps {
  item: CartItem;
}

export const CartItemView = ({ item }: CartItemViewProps) => {
  const product = item.product;
  const title = product?.title || 'Unknown Product';
  const price = product?.price || 0;

  // Якщо в продукті є масив фотографій, беремо перше, інакше — заглушку
  const imageUrl = product?.images?.[0] || card_temp;

  // Функції для оновлення стану (поки що заглушки, їх треба буде додати в Zustand)
  const handleRemove = () => console.log('Remove item:', product?.id);
  const handleIncrease = () => console.log('Increase quantity');
  const handleDecrease = () => console.log('Decrease quantity');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleWrapChange = (event: any) => console.log('Change wrap to:', event.target.value);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        py: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
        alignItems: 'center',
      }}
    >
      {/* 1. Зображення товару */}
      <Box
        component="img"
        src={imageUrl}
        alt={title}
        sx={{
          width: '195px',
          height: '154px',
          objectFit: 'cover',
          borderRadius: '16px',
          flexShrink: 0,
          opacity: 1,
        }}
      />

      {/* 2. Права колонка з деталями */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // Це розтягне контент по висоті картинки
          height: '154px', // Задаємо висоту таку ж, як у картинки
          flexGrow: 1,
          py: 0.5,
        }}
      >
        {/* Рядок 1: Назва та кнопка видалення (хрестик) */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Typography variant="body1" sx={{ fontWeight: 500, lineHeight: 1.2 }}>
            {title}
          </Typography>
          <IconButton
            size="small"
            onClick={handleRemove}
            sx={{ mt: -0.5, mr: -0.5 }} // Трохи зсуваємо вгору та вправо для вирівнювання
          >
            <Icon name="close" width={20} height={20} />
          </IconButton>
        </Box>

        {/* Рядок 2: Вибір пакування (Select) */}
        <Select
          value={item.wrapType}
          onChange={handleWrapChange}
          size="small"
          sx={{
            borderRadius: '24px',
            height: '44px',
            fontSize: '14px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: '1px',
              borderColor: '#ccc',
            },
            '& .MuiSelect-select': {
              paddingLeft: '12px',
              paddingRight: '12px',
            },
          }}
        >
          {/* Тут можна виводити реальні варіанти пакування з продукту, якщо вони є */}
          <MenuItem value={item.wrapType}>{item.wrapType}</MenuItem>
        </Select>

        {/* Рядок 3: Ціна та Лічильник кількості */}
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 0.5 }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            ${price}
          </Typography>

          {/* Контрол кількості (Minus - Number - Plus) */}
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              border: '1px solid #ccc',
              borderRadius: '20px',
              padding: '2px',
            }}
          >
            <IconButton size="small" onClick={handleDecrease} disabled={item.quantity <= 1}>
              <Icon name="minus" width={16} height={16} />
            </IconButton>

            <Typography sx={{ px: 1.5, minWidth: '20px', textAlign: 'center', fontSize: '14px' }}>
              {item.quantity}
            </Typography>

            <IconButton size="small" onClick={handleIncrease}>
              <Icon name="add" width={16} height={16} />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
