import { useDrawer } from '@/hooks/useDrawer';
import { useCartStore } from '@/store/cart.store';
import type { PackagingType } from '@/types/product';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import HeartIconOutline from '@mui/icons-material/FavoriteBorder';
import { Box, Button, IconButton, Typography } from '@mui/material';

type ProductQuantityControlsProps = {
  maxQuantity: number;
  quantity: number;
  productId: number;
  price: number;
  selectedWrap: PackagingType;
  onQuantityChange: (updater: number | ((prev: number) => number)) => void;
};

export function ProductQuantityControls({
  maxQuantity,
  quantity,
  productId,
  price,
  selectedWrap,
  onQuantityChange,
}: ProductQuantityControlsProps) {
  const handleDecrease = () => {
    if (quantity <= 1) return;

    onQuantityChange((prev) => prev - 1);
  };

  const addItemToCart = useCartStore((state) => state.addToCart);
  const { toggleDrawer } = useDrawer();
  const handleIncrease = () => {
    if (quantity >= maxQuantity) return;
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
          addItemToCart({
            productId,
            packagingType: selectedWrap,
            quantity,
            productPrice: price,
            type: 'product',
          });
          toggleDrawer('cart', true)();
        }}
      >
        Add to cart
      </Button>
      <IconButton
        variant="secondary"
        sx={{ maxHeight: 40, display: { xs: 'none', tablet: 'block' } }}
      >
        {/* {isFavorite ? <HeartIconFilled /> : <HeartIconOutline />} */}
        <HeartIconOutline />
      </IconButton>
    </Box>
  );
}
