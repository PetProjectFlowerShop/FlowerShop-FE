import { Box } from '@mui/material';

import { ProductHeader } from './ProductHeadet';
import { ProductQuantityControls } from './ProductQuantityControls';
import { ProductWrapSelect } from './ProductWrapSelect';
import { useState } from 'react';
import { ProductAccordion } from './ProductAccordion/ProductAccordion';
import type { Product } from '@/types/product';

export function ProductInfo({ data }: { data: Product }) {
  const { id, title, price, description, type, packagingType: packagingOptions } = data;

  const [quantity, setQuantity] = useState(1);
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <ProductHeader price={price} title={title} />
      <ProductWrapSelect packagingOptions={packagingOptions} />
      <ProductQuantityControls productId={id} quantity={quantity} onQuantityChange={setQuantity} />
      <ProductAccordion description={description} type={type} title={title} />
    </Box>
  );
}
