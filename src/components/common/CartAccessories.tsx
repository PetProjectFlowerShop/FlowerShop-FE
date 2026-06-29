import { Box, Typography } from '@mui/material';
import { AccessoriesCarousel } from './AccessoriesCarousel';
import type { Accessory } from './AccessoryCard';

interface CartAccessoriesProps {
  accessories: Accessory[];
}

export function CartAccessories({ accessories }: CartAccessoriesProps) {
  return (
    <Box mt={2}>
      <Typography>Add Accessories</Typography>
      <AccessoriesCarousel
        accessories={accessories}
        showPagination={false}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 16 },
        }}
      />
    </Box>
  );
}
