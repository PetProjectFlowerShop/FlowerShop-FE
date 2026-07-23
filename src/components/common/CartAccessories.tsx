import { Box } from '@mui/material';
import { AccessoriesCarousel } from './AccessoriesCarousel';
import type { Accessory } from './AccessoryCard';
import { memo } from 'react';

interface CartAccessoriesProps {
  accessories: Accessory[];
  onAddToCart: (id: string) => void;
}

export const CartAccessories = memo(({ accessories, onAddToCart }: CartAccessoriesProps) => {
  return (
    <Box
      sx={{
        mt: 2,
        position: 'relative',
        zIndex: 10,
        '& .swiper-slide': {
          width: { xs: '306px !important' },
        },
        '& .swiper': {
          overflow: 'visible',
        },
      }}
    >
      <AccessoriesCarousel
        title={true}
        accessories={accessories}
        showPagination={false}
        onAddToCart={onAddToCart}
        breakpoints={{
          0: {
            slidesPerView: 'auto',
            spaceBetween: 16,
          },
        }}
      />
    </Box>
  );
});
