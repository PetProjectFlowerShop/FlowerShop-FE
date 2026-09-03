import { getProductFilters } from '@/api/flowers';
import type { MOCK_ACCESSORIES } from '@/api/mock-data/mockAccessories';
import { useCartStore } from '@/store/cart.store';
import type { AccessoryCartItem, ProductCartItem } from '@/types/cart';
import type { ProductCardType } from '@/types/product';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { PackagingTypeSelect } from '../PackagingTypeSelect/PackagingTypeSelect';
import { ProductCardPrice } from '../ProductCard/ProductCardPrice';
import { Icon } from '../common/Icon';

export type CartItemViewProps =
  | (Omit<AccessoryCartItem, 'productPrice'> & {
      product: (typeof MOCK_ACCESSORIES)[number];
    })
  | (Omit<ProductCartItem, 'productPrice'> & {
      product: ProductCardType;
    });

export const CartItemView = (props: CartItemViewProps) => {
  const { product, quantity, type } = props;

  const { name, price, imageUrl } = product;

  const { data } = useQuery({
    queryKey: ['product-filters'],
    queryFn: getProductFilters,
    staleTime: Infinity,
  });

  const updatePackagingType = useCartStore((store) => store.updatePackagingType);
  const updateQuantity = useCartStore((store) => store.updateQuantity);
  const removeItem = useCartStore((store) => store.removeFromCart);

  const packagingOptions =
    type === 'product'
      ? (data?.bouquetTypes.find((bouquetType) => bouquetType.id === product.bouquetTypeId)
          ?.packagingTypes ?? [])
      : [];

  const cartItemId =
    type === 'product' ? `${product.id}-${props.packagingType.id}` : `${product.id}-no-packaging`;

  return (
    <Box
      sx={{
        display: 'flex',
        gap: { xs: 2, sm: 3 },
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
        alignItems: 'stretch',
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={name}
        sx={{
          width: { xs: '120px', sm: '195px' },
          height: { xs: '140px', sm: '154px' },
          objectFit: 'cover',
          borderRadius: '12px',
          flexShrink: 0,
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
          minWidth: 0,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 400, fontSize: { xs: '1rem', sm: '1.1rem' }, color: 'text.primary' }}
          >
            {name}
          </Typography>
          <IconButton
            size="small"
            sx={{ mt: '-4px', mr: '-4px' }}
            onClick={() => removeItem(cartItemId)}
          >
            <Icon name="close" width={20} height={20} />
          </IconButton>
        </Box>

        <Box pr={{ xs: 0, sm: 8 }} display="grid" gap={{ xs: 1.5, sm: 3 }}>
          {type === 'product' && (
            <Box sx={{ paddingLeft: '12px' }}>
              <PackagingTypeSelect
                onChange={(selectedPackagingType) =>
                  updatePackagingType(cartItemId, selectedPackagingType)
                }
                value={props.packagingType}
                options={packagingOptions}
              />
            </Box>
          )}

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <ProductCardPrice price={price} discountPercent={10} />
            {/*TODO: replace 10 with real discount percent when api will be ready  */}
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                border: '1px solid',
                borderColor: 'text.primary',
                borderRadius: '24px',
                p: '4px',
                gap: 1,
              }}
            >
              <IconButton
                size="small"
                disabled={quantity <= 1}
                sx={{ p: '4px' }}
                onClick={() => updateQuantity(cartItemId, quantity - 1)}
              >
                <Icon name="minus" width={16} height={16} />
              </IconButton>
              <Box
                sx={{
                  bgcolor: '#E0E3D8',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>{quantity}</Typography>
              </Box>
              <IconButton
                size="small"
                sx={{ p: '4px' }}
                onClick={() => updateQuantity(cartItemId, quantity + 1)}
              >
                <Icon name="add" width={16} height={16} />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
