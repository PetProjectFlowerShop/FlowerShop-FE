import HeartIconOutline from '@mui/icons-material/FavoriteBorder';
import HeartIconFilled from '@mui/icons-material/Favorite';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Stack,
  Typography,
  type Theme,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import type { Product } from '@/types/product';

import card_temp from '@/assets/images/card_temp.svg';
import { useCartStore } from '@/store/cart.store';
import { useDrawer } from '@/hooks/useDrawer';

export interface ProductCardProps {
  product: Product;
  currencySymbol?: string;
  isFavorite: boolean;
  onFavoriteClick: (id: string) => void;
}

const getTagStyles = (tag: string, theme: Theme) => {
  const lowerTag = tag.toLowerCase();
  let bgColor = theme.palette.grey[400];

  if (lowerTag.includes('new')) {
    bgColor = theme.palette.primary.dark;
  } else if (lowerTag.includes('popular')) {
    bgColor = theme.palette.secondary.dark;
  } else if (lowerTag.includes('offer')) {
    bgColor = '#D88D93';
  }

  return {
    backgroundColor: bgColor,
    color: theme.palette.common.white,
    '& .MuiChip-label': { padding: '8px 12px' },
  };
};

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
  aspectRatio: '1',
  borderRadius: '16px',
});

const getTagsContainerStyles = (theme: Theme) => ({
  position: 'absolute',
  top: theme.spacing(theme.spacingTokens.stackXs),
  left: theme.spacing(theme.spacingTokens.stackXs),
  maxWidth: 'calc(100% - 70px)',
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
            sx={getTagsContainerStyles(theme)}
          >
            {discount && (
              <Chip
                label={`-${discount}%`}
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: 'white',
                }}
              />
            )}
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} sx={getTagStyles(tag, theme)} />
            ))}
          </Stack>
        </Box>

        <CardContent
          sx={{ pt: 2.5, pb: 1, px: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 1.5 }}
          >
            <Typography
              sx={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                overflow: 'hidden',
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
              sx={{ zIndex: 3 }}
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

      <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
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
