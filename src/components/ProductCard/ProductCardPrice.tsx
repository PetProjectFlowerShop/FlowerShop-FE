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
  const oldPrice = discountPercent ? Math.round(price / (1 - discountPercent / 100)) : undefined;
  return (
    <Stack direction="row" spacing={1.5} alignItems="baseline">
      {oldPrice && (
        <Typography
          variant="caption"
          component="span"
          color="text.secondary"
          sx={{ textDecoration: 'line-through' }}
        >
          {currencySymbol}
          {oldPrice}
        </Typography>
      )}

      <Typography variant="h4" component="span" color={oldPrice ? 'primary.main' : 'text.primary'}>
        {currencySymbol}
        {price}
      </Typography>
    </Stack>
  );
};
