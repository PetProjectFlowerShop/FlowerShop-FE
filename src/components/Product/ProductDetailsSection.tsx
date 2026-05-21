import { Box } from '@mui/material';
import { ProductInfo } from './ProductInfo/ProductInfo';
import type { Product } from '../../types/product';

export function ProductDetailsSection({ data }: { data: Product }) {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: '1fr',
        desktop: '1fr 1fr',
      }}
      gap={{ tablet: 3, desktop: 8 }}
    >
      Gallery product
      <ProductInfo data={data} />
    </Box>
  );
}
