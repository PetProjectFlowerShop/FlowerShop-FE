import { PageContainer } from '@/components/common/PageContainer';

export function Catalog() {
  // const viewedProducts = useRecentlyStore((store) => store.items);
  return (
    <PageContainer>
      {/* <DynamicBreadcrumbs mb={2} />
      <TitleWithImageSection title="Flower Catalog" imageSrc={catalogBaner} imageAlt="Flowers" />
      <Box
        sx={{
          display: { tablet: 'flex' },
          flexDirection: { tablet: 'row' },
          justifyContent: { tablet: 'space-between' },
        }}
      >
        <Box mb="16px" minWidth="242px" display={{ desktop: 'none' }}>
          <Filter />
        </Box>
        <Box mb="24px" minWidth="242px" ml="auto">
          <Sort />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap={6} mb={16}>
        <FilteredTags />
        <Box display="flex" gap={6}>
          <Box
            display={{ xs: 'none', desktop: 'flex' }}
            flexDirection={{ desktop: 'column' }}
            width={306}
            flexShrink={0}
          >
            <FilterContent defaultExpanded />
          </Box>
          <ProductList />
        </Box>
      </Box>
      {viewedProducts.length > 0 ? (
        <RecentlyViewedSection />
      ) : (
        <RecommendationsSection title="Recommendations" />
      )} */}
    </PageContainer>
  );
}
