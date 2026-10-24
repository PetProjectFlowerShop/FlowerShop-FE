import { getProductFilters } from '@/api/flowers';
import catalogBaner from '@/assets/images/catalog-banner.webp';
import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';
import TitleWithImageSection from '@/components/common/TitleWithImageSection';
import { Filter } from '@/components/Filter/Filter';
import { FilterContent } from '@/components/Filter/FilterContent';
import { SelectedFilterTags } from '@/components/Filter/SelectedFilterTags/SelectedFilterTags';
import { PageLayout } from '@/components/layouts/PageLayout';
import { SectionContainer } from '@/components/layouts/SectionContainer';
import { ProductList } from '@/components/ProductList/ProductList';
import { Sort } from '@/components/Sort/Sort';
import { staticFilters } from '@/config/staticFilters';
import { Box, Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

export function Catalog() {
  const { data: apiFilters, isLoading } = useQuery({
    queryKey: ['product-filters'],
    queryFn: getProductFilters,
    staleTime: Infinity,
  });
  if (isLoading) {
    return <>... Loading</>;
  }

  const filtersData = {
    ...staticFilters,
    flowerTypes: apiFilters?.flowerTypes ?? [],
    colors: apiFilters?.colors ?? [],
    bouquetTypes: apiFilters?.bouquetTypes ?? [],
    occasions: apiFilters?.occasions ?? [],
  };

  return (
    <>
      <DynamicBreadcrumbs mb={2} />
      <PageLayout>
        <TitleWithImageSection title="Flower Catalog" imageSrc={catalogBaner} imageAlt="Flowers" />
        <section>
          <SectionContainer
            sx={{
              display: { xs: 'flex', desktop: 'grid' },
              flexDirection: 'column',
              gridTemplateColumns: { desktop: '306px minmax(0, 1fr)' },
              gap: 6,
            }}
          >
            <Box display={{ xs: 'none', desktop: 'flex' }} flexDirection="column">
              <FilterContent defaultExpanded filtersData={filtersData} />
            </Box>
            <Stack
              spacing={{ xs: 4, tablet: 0 }}
              flexDirection={{ tablet: 'row' }}
              justifyContent={{ tablet: 'space-between' }}
              display={{ desktop: 'none' }}
            >
              <Box sx={{ width: { tablet: '243px' } }}>
                <Filter filtersData={filtersData} />
              </Box>

              <Box sx={{ width: { tablet: '243px' } }}>
                <Sort />
              </Box>
            </Stack>
            <Stack spacing={6}>
              <Stack flexDirection="row" justifyContent="space-between" spacing={0} gap={6}>
                <SelectedFilterTags filtersData={filtersData} />
                <Box
                  display={{ xs: 'none', desktop: 'flex' }}
                  width="100%"
                  maxWidth={{ desktop: '196px' }}
                  marginLeft="auto"
                >
                  <Sort />
                </Box>
              </Stack>
              <ProductList />
            </Stack>
          </SectionContainer>
        </section>
      </PageLayout>
    </>
  );
}
