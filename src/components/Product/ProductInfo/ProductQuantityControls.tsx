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
          boxSizing: 'border-box',
          width: { xs: 110, tablet: 140 },
          height: { xs: 56, tablet: 60 },
          border: '1px solid',
          borderColor: 'primary.dark',
          borderRadius: '20px',
          px: 3,
          py: { xs: '13px', tablet: '15px' },
          gap: { xs: 1, tablet: '19px' },
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          sx={{ width: 24, height: 24, color: 'primary.dark' }}
          onClick={handleDecrease}
          aria-label="Decrease quantity"
        >
          <RemoveIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 30,
            height: 30,
            minWidth: 30,
            flexShrink: 0,
            bgcolor: 'olive.100',
            borderRadius: '50%',
          }}
          variant="button"
        >
          {quantity}
        </Typography>
        <IconButton
          sx={{ width: 24, height: 24, color: 'primary.dark' }}
          onClick={handleIncrease}
          aria-label="Increase quantity"
        >
          <AddIcon sx={{ fontSize: 18 }} />
        </IconButton>
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
        sx={{
          width: 40,
          height: 40,
          display: { xs: 'none', tablet: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* {isFavorite ? <HeartIconFilled /> : <HeartIconOutline />} */}
        <HeartIconOutline />
      </IconButton>
    </Box>
  );
}
