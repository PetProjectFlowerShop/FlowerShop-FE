import { Box, Button, Pagination } from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '@/api/products';
import { parseProductFilters } from '@/utils/productFilters';
import { getProductsFromCache } from '@/lib/products/getProductsFromCache';
import { ProductCard } from '../common/ProductCard';
import { EmptyProductList } from './EmptyProductList';
import { useFavorites } from '@/hooks/useFavorite';

export function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const { favorites, toggle } = useFavorites();

  const favoriteSet = useMemo(() => new Set(favorites), [favorites]);
  const filters = useMemo(() => parseProductFilters(searchParams), [searchParams]);

  const { page, ...filtersWithoutPage } = filters;
  const currentPage = page ?? 1;

  const [feedAnchorPage, setFeedAnchorPage] = useState(currentPage);

  const query = useQuery({
    queryKey: ['products', filtersWithoutPage, currentPage],
    queryFn: () =>
      fetchProducts({
        ...filtersWithoutPage,
        page: currentPage,
      }),
    placeholderData: (prev) => prev,
  });

  const totalPages = query.data?.totalPages ?? 0;

  const products = useMemo(
    () =>
      getProductsFromCache({
        queryClient,
        filters: filtersWithoutPage,
        currentPage,
        feedAnchorPage,
      }),
    [queryClient, filtersWithoutPage, currentPage, feedAnchorPage]
  );

  if (query.isLoading && products.length === 0) {
    return <div>Loading...</div>;
  }

  const isEmpty = !query.isLoading && !query.isFetching && products.length === 0;

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
          <ProductCard
            isFavorite={favoriteSet.has(product.id)}
            onFavoriteClick={() => toggle(product.id)}
            key={product.id}
            product={product}
          />
        ))}
      </Box>

      <Button
        onClick={handleShowMore}
        variant="outlined"
        color="secondary"
        fullWidth
        disabled={query.isFetching || currentPage >= totalPages}
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
    </div>
  );
}
