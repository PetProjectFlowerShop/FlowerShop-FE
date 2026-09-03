import { Box } from '@mui/material';
import { AccessoriesCarousel } from '../common/AccessoriesCarousel';
import type { Accessory } from '../common/AccessoryCard';
import { memo } from 'react';

interface CartAccessoriesProps {
  accessories: Accessory[];
}

export const CartAccessories = memo(({ accessories }: CartAccessoriesProps) => {
  return (
    <Box
      sx={{
        mt: 2,
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        maxWidth: '100%',
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
        gap={{ tablet: 4 }}
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
