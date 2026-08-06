import { CardContent, Stack, Typography } from '@mui/material';
import { ProductCardFavoriteButton } from './ProductCardFavoriteButton';
import { ProductCardPrice } from './ProductCardPrice';

type ProductCardInfoProps = {
  name: string;
  isFavorite: boolean;
  onFavoriteClick: () => void;
  price: number;
  discountPercent?: number;
};

export const ProductCardInfo = ({
  name,
  isFavorite,
  onFavoriteClick,
  price,
  discountPercent,
}: ProductCardInfoProps) => {
  return (
    <CardContent sx={{ p: 0, mb: 2, mt: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
        sx={{ mb: 1, height: { tablet: '56px' } }}
      >
        <Typography
          sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            alignSelf: 'start',
          }}
        >
          {name}
        </Typography>
        <ProductCardFavoriteButton isFavorite={isFavorite} onClick={onFavoriteClick} />
      </Stack>
      <ProductCardPrice price={price} discountPercent={discountPercent} />
    </CardContent>
  );
};
