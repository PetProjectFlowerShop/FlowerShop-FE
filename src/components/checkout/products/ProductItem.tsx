import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { ProductCardPrice } from '@/components/ProductCard/ProductCardPrice';

import type { ProductCardType, PackagingType } from '@/types/product';

// TODO - When data arrives from the backend, import this type from types/product.ts.
type BaseAccessoryCartItemType = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

type BaseProductCartItemType = {
  productId: number;
  productPrice: number;
  quantity: number;
};

type ProductCartItemType = BaseProductCartItemType & {
  type: 'product';
  packagingType: PackagingType;
  product: ProductCardType & {
    quantity?: number;
  };
};

type AccessoryCartItemType = BaseProductCartItemType & {
  type: 'accessory';
  product: BaseAccessoryCartItemType;
};

type Props = {
  item: ProductCartItemType | AccessoryCartItemType;
  withBorder?: boolean;
  onRemove: (cartItemId: string) => void;
};

export default function ProductItem({ item, withBorder, onRemove }: Props) {
  const { productId, quantity, productPrice, product } = item;
  const cartItemId =
    item.type === 'product' ? `${productId}_${item.packagingType.id}` : `${productId}_no-packaging`;

  const packagingName = item.type === 'product' ? item.packagingType.name : 'No packaging';

  const price =
    (productPrice + (item.type === 'product' ? item.packagingType.price : 0)) * quantity;

  const discountPercent = item.type === 'product' ? (item.product.discountPercent ?? 0) : 0;

  // TODO - Temporary value. Replace this constant once the value is received from the backend.
  let MaxCount = 2;

  if (item.type === 'product' && item.product.quantity) {
    MaxCount = item.product.quantity;
  }

  const outOfStock = quantity > MaxCount ? true : false;

  return (
    <Box
      px={2}
      py={3}
      mb={withBorder ? 0 : 2}
      sx={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: {
          xs: '120px 1fr',
          tablet: '240px 1fr',
        },
        gap: 2,
        ...(withBorder && {
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
          marginTop: '-1px',
        }),
        ...(outOfStock && {
          bgcolor: 'action.disabledBackground',
        }),
      }}
    >
      <Box
        component="img"
        src={product.imageUrl}
        alt={product.name}
        sx={{
          width: '100%',
          height: {
            xs: '160px',
            tablet: '216px',
          },
          objectFit: 'cover',
          borderRadius: '20px',
          ...(outOfStock && {
            filter: 'grayscale(1)',
            opacity: 0.6,
          }),
        }}
      />
      <Box>
        <Typography
          variant="body"
          component="div"
          sx={{ mb: 2, width: 'calc(100% - 52px)', minHeight: 54 }}
        >
          {product.name}
        </Typography>

        {outOfStock && (
          <Typography variant="body" color="error.main" sx={{ display: 'block', mt: 0.5 }}>
            Out of stock
          </Typography>
        )}

        <Box sx={{ mb: 1 }}>
          <Typography variant="body" component="div" mb={1}>
            Wrapping:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {' '}
            {packagingName}
          </Typography>
        </Box>

        <Box sx={{ mb: 1 }}>
          <Typography variant="body">Amount:</Typography>
          <Typography variant="caption" color="text.secondary">
            {' '}
            {item.quantity} {item.quantity === 1 ? 'item' : 'items'}
          </Typography>
        </Box>

        <Box display="flex" gap={2} alignItems="flex-end">
          <Typography variant="body">Price: </Typography>
          <ProductCardPrice price={price} discountPercent={discountPercent} />
        </Box>
      </Box>

      {withBorder && (
        <IconButton
          onClick={() => onRemove(cartItemId)}
          aria-label={`Remove ${product.name} from cart`}
          sx={{
            position: 'absolute',
            top: '12px',
            right: '8px',
            p: 0,
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  );
}
