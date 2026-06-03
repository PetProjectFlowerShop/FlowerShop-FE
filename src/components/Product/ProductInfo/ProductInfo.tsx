import { Box } from '@mui/material';

import type { Product } from '@/types/product';
import { useState } from 'react';
import { ProductAccordion } from './ProductAccordion/ProductAccordion';
import { ProductHeader } from './ProductHeader';
import { ProductQuantityControls } from './ProductQuantityControls';
import { ProductWrapSelect } from './ProductWrapSelect';
import { useFavorites } from '@/hooks/useFavorite';

export function ProductInfo({ data }: { data: Product }) {
  const { id, title, price, description, type, packagingType: packagingOptions } = data;
  const { isFavorite, toggle } = useFavorites();

  const [quantity, setQuantity] = useState(1);
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <ProductHeader
        price={price}
        title={title}
        isFavorite={isFavorite(id)}
        onFavoriteClick={() => toggle(id)}
      />
      <ProductWrapSelect packagingOptions={packagingOptions} />
      <ProductQuantityControls
        productId={id}
        quantity={quantity}
        onQuantityChange={setQuantity}
        isFavorite={isFavorite(id)}
        onFavoriteClick={() => toggle(id)}
      />
      <ProductAccordion description={description} type={type} title={title} />
    </Box>
  );
}
