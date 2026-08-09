import { Icon } from '@/components/common/Icon';
import { Box, IconButton, Typography } from '@mui/material';

type ProductHeaderProps = {
  name: string;
  price: number;
  available?: boolean;
};

export function ProductHeader({ name, price, available = true }: ProductHeaderProps) {
  return (
    <Box display="flex" flexDirection="column" gap={{ xs: 1, tablet: 2 }}>
      <Typography variant="h2">{name}</Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" sx={{ opacity: 0.6 }}>
          ${price}
        </Typography>
        <IconButton
          variant="secondary"

          sx={{ maxHeight: 40, display: { tablet: 'none' } }}
        >
          {/* {isFavorite ? <HeartIconFilled /> : <HeartIconOutline />} */}
        </IconButton>
      </Box>
      <Typography
        variant="caption2"
        display="flex"
        alignItems="center"
        color={available ? 'primary.main' : 'secondary.main'}
        gap={1}
      >
        <Icon name="yes" width={24} height={24} fill="currentColor" />
        {available ? 'In stock' : 'Out of stock'}
      </Typography>
    </Box>
  );
}
