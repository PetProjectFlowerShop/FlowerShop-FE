import { fetchProducts } from '@/api/flowers';
import type { SortOption } from '@/constants/sort';
import { useFilters } from '@/hooks/useFilters';
import { getProductsFromCache } from '@/lib/products/getProductsFromCache';
import { normalizeFilters } from '@/utils/normalizeFilters';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EmptyProductList } from './EmptyProductList';
import { Box, Button, Pagination } from '@mui/material';
import { ProductCard } from '../ProductCard';

export function ProductList() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useFilters();
  const currentPage = Number(searchParams.get('page') ?? 1);

  const [feedAnchorPage, setFeedAnchorPage] = useState(currentPage);
  const sort = (searchParams.get('sort') ?? 'top') as SortOption;
  const { data, isPending, isLoading, isFetching, isError } = useQuery({
    queryKey: ['catalog-products', normalizeFilters(filters), sort, currentPage],
    queryFn: () =>
      fetchProducts({ filters: normalizeFilters(filters), sort: sort, page: currentPage }),
    placeholderData: (prev) => prev,
  });

  if (isError) {
    return null;
  }
  if (isPending || isLoading || isFetching) {
    return <div>...loading</div>;
  }

  const totalPages = data.page.totalPages;

  const products = getProductsFromCache({
    queryClient,
    filters: normalizeFilters(filters),
    sort,
    currentPage,
    feedAnchorPage,
  });

  const isEmpty = !isLoading && !isFetching && products.length === 0;

  if (isEmpty) {
    return <EmptyProductList />;
  }

  const changePage = (page: number) => {
    setFeedAnchorPage(page);

    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    setSearchParams(params);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShowMore = () => {
    const nextPage = currentPage + 1;

    if (feedAnchorPage === currentPage) {
      setFeedAnchorPage(currentPage);
    }

    const params = new URLSearchParams(searchParams);
    params.set('page', String(nextPage));
    setSearchParams(params);
  };

  return (
    <div>
      <Box
        display="grid"
        mt={6}
        mb={9}
        gridTemplateColumns={{
          xs: 'repeat(2, minmax(135px, 1fr))',
          desktop: 'repeat(3, minmax(135px, 1fr))',
        }}
        gap={{ xs: '15px', tablet: '24px' }}
      >
        {products.map((product) => (
          <ProductCard isFavorite={false} key={product.id} product={product} />
        ))}
      </Box>

      {currentPage < totalPages && (
        <Button
          onClick={handleShowMore}
          variant="outlined"
          color="secondary"
          fullWidth
          disabled={isFetching || currentPage >= totalPages}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mx: 'auto',
            mb: 5,
            maxWidth: { desktop: '526px' },
          }}
        >
          Show more
        </Button>
      )}

      {totalPages > 1 && (
        <Pagination
          color="secondary"
          size="large"
          page={currentPage}
          count={totalPages}
          onChange={(_, value) => changePage(value)}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            mx: 'auto',
          }}
        />
      )}
    </div>
  );
}
