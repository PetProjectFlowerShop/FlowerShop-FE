import { useDrawer } from '@/hooks/useDrawer';
import { useCartStore } from '@/store/cart.store';
import AddIcon from '@mui/icons-material/Add';
import HeartIconFilled from '@mui/icons-material/Favorite';
import HeartIconOutline from '@mui/icons-material/FavoriteBorder';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Button, IconButton, Typography } from '@mui/material';

type ProductQuantityControlsProps = {
  quantity: number;
  productId: number;

  onQuantityChange: (updater: number | ((prev: number) => number)) => void;
  onFavoriteClick: () => void;
  isFavorite?: boolean;
};

const MAX_QUANTITY = 99;

export function ProductQuantityControls({
  quantity,
  productId,

  onQuantityChange,
  onFavoriteClick,
  isFavorite = false,
}: ProductQuantityControlsProps) {
  const handleDecrease = () => {
    if (quantity <= 1) return;

    onQuantityChange((prev) => prev - 1);
  };

  const addItemToCart = useCartStore((state) => state.addToCart);
  const { toggleDrawer } = useDrawer();
  const handleIncrease = () => {
    if (quantity >= MAX_QUANTITY) return;
    onQuantityChange((prev) => prev + 1);
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      gap={{ xs: 2, tablet: 4 }}
      alignItems="center"
    >
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'primary.dark',
          borderRadius: '20px',
          px: 3,
          py: '13px',
        }}
        display="flex"
        alignItems="center"
        gap={1}
      >
        <Button
          variant="text"
          sx={{ maxWidth: '24px', maxHeight: '24px', minWidth: '24px', color: 'primary.dark' }}
          onClick={handleDecrease}
          aria-label="Decrease quantity"
        >
          <RemoveIcon />
        </Button>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 30,
            height: 30,
            bgcolor: 'olive.100',
            borderRadius: '50%',
          }}
          variant="button"
        >
          {quantity}
        </Typography>
        <Button
          variant="text"
          sx={{ maxWidth: '24px', maxHeight: '24px', minWidth: '24px', color: 'primary.dark' }}
          onClick={handleIncrease}
          aria-label="Increase quantity"
        >
          <AddIcon />
        </Button>
      </Box>
      <Button
        variant="contained"
        fullWidth
        onClick={() => {
          addItemToCart(productId, quantity);
          toggleDrawer('cart', true)();
        }}
      >
        Add to cart
      </Button>
      <IconButton
        variant="secondary"
        onClick={onFavoriteClick}
        sx={{ maxHeight: 40, display: { xs: 'none', tablet: 'block' } }}
      >
        {isFavorite ? <HeartIconFilled /> : <HeartIconOutline />}
      </IconButton>
    </Box>
  );
}
