import type { ProductDetails } from '@/types/product';
import { Box } from '@mui/material';
import { ProductHeader } from './ProductHeader';
import { ProductWrapSelect } from './ProductWrapSelect';
import { useState } from 'react';
import { ProductQuantityControls } from './ProductQuantityControls';
import { ProductAccordion } from './ProductAccordion/ProductAccordion';

type ProductInfoProps = Omit<ProductDetails, 'images'>;

export function ProductInfo({
  id,
  name,
  price,
  bouquetType,
  description,
  quantity: maxQuantity,
}: ProductInfoProps) {
  // const favorites = useFavoritesStore((s) => s.items);
  // const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const packagingOptions = bouquetType.packagingTypes;

  const [selectedWrap, setSelectedWrap] = useState(packagingOptions[0].id);
  const [quantity, setQuantity] = useState(1);
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <ProductHeader price={price} name={name} />
      <ProductWrapSelect
        selectedWrap={selectedWrap}
        onWrapChange={setSelectedWrap}
        packagingOptions={packagingOptions}
      />

      <ProductQuantityControls
        productId={id}
        maxQuantity={maxQuantity}
        quantity={quantity}
        onQuantityChange={setQuantity}
      />
      <ProductAccordion description={description} type={bouquetType} title={name} />
    </Box>
  );
}
