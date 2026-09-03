import { useDrawer } from '@/hooks/useDrawer';
import type { ProductCardType } from '@/types/product';

import { Button, Card, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { ProductCardInfo } from './ProductCardInfo';
import { ProductCardTags } from './ProductCardTags';
import { ProductImageArea } from './ProductImageArea';
import { useFavoritesStore } from '@/store/favorites.store';
import { useCartStore } from '@/store/cart.store';
import { useQuery } from '@tanstack/react-query';
import { getProductFilters } from '@/api/flowers';

export interface ProductCardProps {
  product: ProductCardType;
  isFavorite: boolean;
}

const getCardStyles = {
  maxWidth: 360,
  margin: '0 auto',
  borderRadius: '16px',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
};

const getActionAreaStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  '&:hover .MuiCardActionArea-focusHighlight': {
    opacity: 0,
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
};

export const ProductCard = ({ product, isFavorite = false }: ProductCardProps) => {
  const {
    id,
    name,
    price,
    discountPercent,
    imageUrl,
    isSeasonOffer,
    isPopular,
    isNew,
    bouquetTypeId,
  } = product;
  const onFavoriteClick = useFavoritesStore((s) => s.toggleFavorite);
  const addItemToCart = useCartStore((state) => state.addToCart);
  const { data } = useQuery({
    queryKey: ['product-filters'],
    queryFn: getProductFilters,
    staleTime: Infinity,
  });
  const defaultPackagingType = data?.bouquetTypes.find(
    (bouquetType) => bouquetType.id === bouquetTypeId
  )?.packagingTypes[0];
  const { toggleDrawer } = useDrawer();
  return (
    <Card elevation={0} sx={getCardStyles} data-testid="product-card">
      <CardActionArea component={Link} to={`/catalog/${id}`} sx={getActionAreaStyles}>
        <ProductImageArea
          imageUrl={imageUrl}
          alt={name}
          overlay={
            <ProductCardTags
              discountPercent={discountPercent}
              isSeasonOffer={isSeasonOffer}
              isPopular={isPopular}
              isNew={isNew}
            />
          }
        />
        <ProductCardInfo
          name={name}
          price={price}
          discountPercent={discountPercent}
          isFavorite={isFavorite}
          onFavoriteClick={() => onFavoriteClick(id)}
        />
      </CardActionArea>

      <CardActions sx={{ p: 0 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          disabled={!defaultPackagingType}
          onClick={() => {
            if (!defaultPackagingType) return;
            addItemToCart({
              type: 'product',
              productId: id,
              packagingType: defaultPackagingType,
              quantity: 1,
              productPrice: price,
            });
            toggleDrawer('cart', true)();
          }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
