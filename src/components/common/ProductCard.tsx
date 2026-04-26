import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Stack,
  Box,
  Button,
  Chip,
  type Theme,
  CardActionArea,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeartIconFilled from '@mui/icons-material/Favorite';
import HeartIconOutline from '@mui/icons-material/FavoriteBorder';
import card_temp from './../../assets/images/card_temp.svg';
import type { Product } from '../../types/product';
import { Link } from 'react-router-dom';

export interface ProductCardProps {
  product: Product;
  currencySymbol?: string;
  onFavoriteClick?: (id: string) => void;
  onAddToCartClick?: (id: string) => void;
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

const getCardStyles = (theme: Theme) => ({
  maxWidth: 360,
  margin: '0 auto',
  borderRadius: '16px',
  transition: 'box-shadow 0.3s ease-in-out',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
});

const getImageContainerStyles = () => ({
  position: 'relative',
  width: '100%',
  aspectRatio: '1',
});

const getTagsContainerStyles = (theme: Theme) => ({
  position: 'absolute',
  top: theme.spacing(theme.spacingTokens.stackXs),
  left: theme.spacing(theme.spacingTokens.stackXs),
  maxWidth: 'calc(100% - 70px)',
});

export const ProductCard = ({
  product,
  currencySymbol = '$',
  onFavoriteClick,
  onAddToCartClick,
}: ProductCardProps) => {
  const theme = useTheme();
  const { id, title, imgURL, price, discount, isFavorite, tags } = product;

  const oldPrice = discount ? Math.round(price / (1 - discount / 100)) : undefined;

  return (
    <Card elevation={0} sx={getCardStyles(theme)}>
      <CardActionArea component={Link} to={`/product/${id}`}>
        <Box sx={getImageContainerStyles()}>
          <CardMedia
            component="img"
            image={imgURL || card_temp}
            alt={title}
            sx={{ borderRadius: '16px', objectFit: 'cover', height: '100%' }}
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
            <Typography>{title}</Typography>

            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onFavoriteClick?.(id);
              }}
              onMouseDown={(e) => e.stopPropagation()}
              variant="secondary"
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

      <CardActions>
        <Button variant="contained" color="primary" onClick={() => onAddToCartClick?.(id)}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
