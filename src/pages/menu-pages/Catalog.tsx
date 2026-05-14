import { PageContainer } from '../../components/common/PageContainer';

import { DynamicBreadcrumbs } from '../../components/common/DynamicBreadcrumbs';

import { Box } from '@mui/material';
import { Filter } from '../../components/Filter/Filter';
import { FilteredTags } from '../../components/Filter/FilteredTags';
import { ProductList } from '../../components/ProductList/ProductList';
import { Sort } from '../../components/Sort/Sort';
import { FilterContent } from '../../components/Filter/FilterContent';

export function Catalog() {
  return (
    <PageContainer>
      <DynamicBreadcrumbs />
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
      <Box display="flex" flexDirection="column" gap={6}>
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
        pagintaion
      </Box>
    </PageContainer>
  );
}
