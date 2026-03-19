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
} from '@mui/material';
import HeartIconFilled from '@mui/icons-material/Favorite';
import HeartIconOutline from '@mui/icons-material/FavoriteBorder';
import card_temp from './../../assets/images/card_temp.svg';

export interface Product {
  id: string;
  title: string;
  imgURL: string;
  price: number;
  discount?: number;
  isFavorite: boolean;
  tags: string[]; // ['New', 'Popular', 'Season offer']
}

export interface ProductCardProps {
  product: Product;
  currencySymbol?: string;
  onFavoriteClick?: (id: string) => void;
  onAddToCartClick?: (id: string) => void;
}

const getTagColor = (
  tag: string
): 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' => {
  const lowerTag = tag.toLowerCase();
  if (lowerTag.includes('new')) return 'success';
  if (lowerTag.includes('popular')) return 'secondary';
  if (lowerTag.includes('offer')) return 'info';
  return 'default';
};

export const ProductCard = ({
  product,
  currencySymbol = '$',
  onFavoriteClick,
  onAddToCartClick,
}: ProductCardProps) => {
  const { id, title, imgURL, price, discount, isFavorite, tags } = product;

  const oldPrice = discount ? Math.round(price / (1 - discount / 100)) : undefined;

  return (
    <Card
      elevation={2}
      sx={{
        maxWidth: 360,
        margin: '0 auto',
        borderRadius: '16px',
        transition: 'box-shadow 0.3s ease-in-out',
        backgroundColor: 'transparent',
        '&:hover': {
          elevation: 4,
          boxShadow: (theme) => theme.shadows[4],
        },
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', aspectRatio: '1' }}>
        <CardMedia
          component="img"
          image={imgURL || card_temp}
          alt={title}
          sx={{ borderRadius: '16px', objectFit: 'cover' }}
        />

        <Stack
          direction="column"
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            flexWrap: 'wrap',
            gap: 1,
            maxWidth: 'calc(100% - 70px)',
          }}
        >
          {discount && <Chip label={`-${discount}%`} color="secondary" size="small" />}
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} color={getTagColor(tag)} size="small" />
          ))}
        </Stack>
      </Box>

      <CardContent sx={{ pt: 2.5, pb: 1, px: 2, flexGrow: 1 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.5 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              fontSize: '1.1rem',
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>

          <IconButton
            onClick={() => onFavoriteClick?.(id)}
            sx={{
              width: 40,
              height: 40,
              p: 2,
              backgroundColor: 'secondary.main',
              borderRadius: 3,
              color: isFavorite ? 'secondary.main' : 'text.secondary',
            }}
          >
            {isFavorite ? <HeartIconFilled /> : <HeartIconOutline />}
          </IconButton>
        </Stack>

        <Stack direction="row" spacing={1.5} alignItems="baseline" sx={{ mt: 'auto' }}>
          {oldPrice && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textDecoration: 'line-through', fontSize: '0.95rem' }}
            >
              {currencySymbol}
              {oldPrice}
            </Typography>
          )}
          <Typography
            variant="h6"
            color={oldPrice ? 'primary.main' : 'text.primary'}
            sx={{ fontWeight: 600 }}
          >
            {currencySymbol}
            {price}
          </Typography>
        </Stack>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 1 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => onAddToCartClick?.(id)}
          sx={{
            p: '16px 20px',
            borderRadius: '20px',
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
