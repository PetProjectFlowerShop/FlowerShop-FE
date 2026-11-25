import { Stack, Typography } from '@mui/material';

type ProductCardPriceProps = {
  discountPercent?: number;
  price: number;
  currencySymbol?: string;
};

export const ProductCardPrice = ({
  discountPercent,
  price,
  currencySymbol = '$',
}: ProductCardPriceProps) => {
  const newPrice = discountPercent ? Math.round(price * (1 - discountPercent / 100)) : undefined;
  return (
    <Stack direction="row" spacing={1.5} alignItems="baseline">
      {newPrice && (
        <Typography
          variant="caption"
          component="span"
          color="text.disabled"
          sx={{ textDecoration: 'line-through' }}
        >
          {currencySymbol}
          {price}
        </Typography>
      )}

      <Typography variant="h4" component="span" color={newPrice ? 'primary.main' : 'text.primary'}>
        {currencySymbol}
        {newPrice ? newPrice : price}
      </Typography>
    </Stack>
  );
};
