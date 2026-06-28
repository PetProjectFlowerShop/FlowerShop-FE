import card_temp from '@/assets/images/card_temp.svg';
import { useDrawer } from '@/hooks/useDrawer';
import { useCartStore } from '@/store/cart.store';
import type { Product } from '@/types/product';
import HeartIconFilled from '@mui/icons-material/Favorite';
import HeartIconOutline from '@mui/icons-material/FavoriteBorder';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { CardTag } from './CardTag';

export interface ProductCardProps {
  product: Product;
  currencySymbol?: string;
  isFavorite: boolean;
  onFavoriteClick: (id: string) => void;
}

const getCardStyles = () => ({
  maxWidth: 360,
  margin: '0 auto',
  borderRadius: '16px',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
});

const getActionAreaStyles = () => ({
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
});

const getImageContainerStyles = () => ({
  position: 'relative',
  width: '100%',
  height: { xs: '248px', tablet: '400px' },
  aspectRatio: '1',
  borderRadius: '16px',
});

const getTagsContainerStyles = () => ({
  position: 'absolute',
  top: 8,
  left: 8,

  zIndex: 2,
});

export const ProductCard = ({
  product,
  currencySymbol = '$',
  onFavoriteClick,
  isFavorite = false,
}: ProductCardProps) => {
  const theme = useTheme();
  const { id, title, price, discount, tags } = product;
  const addItemToCart = useCartStore((state) => state.addToCart);
  const oldPrice = discount ? Math.round(price / (1 - discount / 100)) : undefined;
  const defaultWrap = product.packagingType?.[0]?.key;
  const { toggleDrawer } = useDrawer();

  return (
    <Card elevation={0} sx={getCardStyles()}>
      <CardActionArea component={Link} to={`/catalog/${id}`} sx={getActionAreaStyles()}>
        <Box sx={getImageContainerStyles()}>
          <CardMedia
            component="img"
            image={card_temp}
            alt={title}
            sx={{
              objectFit: 'cover',
              height: '100%',
              width: '100%',
              transition: 'transform 0.5s ease',
            }}
          />

          <Stack
            direction="column"
            alignItems="flex-start"
            spacing={theme.spacingTokens.microX}
            sx={getTagsContainerStyles()}
          >
            {discount && (
              <CardTag
                label={`-${discount}%`}
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: 'white',
                  borderColor: theme.palette.secondary.main,
                }}
              />
            )}
            {tags
              .filter((tag) => !(discount && tag.includes('%')))
              .map((tag, index) => (
                <CardTag key={index} label={tag} tag={tag} />
              ))}
          </Stack>
        </Box>

        <CardContent
          sx={{ p: 0, mb: 2, mt: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}
        >
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
              {title}
            </Typography>

            <IconButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onFavoriteClick(id);
              }}
              onMouseDown={(e) => e.stopPropagation()}
              variant="secondary"
              sx={{ zIndex: 3, mt: { tablet: 2 } }}
            >
              {isFavorite ? <HeartIconFilled /> : <HeartIconOutline />}
            </IconButton>
          </Stack>

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

            <Typography
              variant="h4"
              component="span"
              color={oldPrice ? 'primary.main' : 'text.primary'}
            >
              {currencySymbol}
              {price}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ p: 0 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            if (!defaultWrap) return;
            addItemToCart(product.id, defaultWrap, 1);
            toggleDrawer('cart', true)();
          }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
