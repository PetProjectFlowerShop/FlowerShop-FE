import { PageContainer } from '@/components/common/PageContainer';

import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';

import { Box } from '@mui/material';
import { Filter } from '../../components/Filter/Filter';
import { FilterContent } from '../../components/Filter/FilterContent';
import { FilteredTags } from '../../components/Filter/FilteredTags';
import { ProductList } from '../../components/ProductList/ProductList';
import { Sort } from '../../components/Sort/Sort';
import RecommendationsSection from '../../components/home/RecommendationsSection';
import TitleWithImageSection from '../../components/common/TitleWithImageSection';
import catalogBaner from '../../assets/images/catalog-banner.webp';

export function Catalog() {
  return (
    <PageContainer>
      <DynamicBreadcrumbs />
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
      <RecommendationsSection />
    </PageContainer>
  );
}
