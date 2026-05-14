import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '../../api/products';
import type { Product } from '../../types/product';
import { parseProductFilters } from '../../utils/productFilters';
import { ProductCard } from '../common/ProductCard';

export function ProductList() {
  const [searchParams] = useSearchParams();
  const filters = useMemo(() => parseProductFilters(searchParams), [searchParams]);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [
      'products',
      filters.type,
      filters.color,
      filters.sort,
      filters.priceMin,
      filters.priceMax,
    ],
    queryFn: () => fetchProducts(filters),
    placeholderData: (prev) => prev,
  });

  const products = Array.isArray(data) ? data : [];

  if (isLoading) return <div>Loading...</div>;

  if (!products.length)
    return (
      <Box display="flex" flexDirection="column" gap={6}>
        <Typography variant="h3">No bouquets found</Typography>
        <Typography>
          We couldn't find any bouquets matching your selection. Try clearing some filters to see
          more options.
        </Typography>
      </Box>
    );

  return (
    <div>
      <Box
        display="grid"
        mt="24px"
        gridTemplateColumns={{
          xs: 'repeat(2, minmax(135px, 1fr))',
          desktop: 'repeat(3, minmax(135px, 1fr))',
        }}
        gap={{ xs: '15px', tablet: '24px' }}
      >
        {products.map((p: Product) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Box>

      {isFetching && !isLoading && <div>Updating...</div>}
    </div>
  );
}
