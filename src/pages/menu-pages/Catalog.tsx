import { PageContainer } from '../../components/common/PageContainer';
import { Typography } from '@mui/material';
import { DynamicBreadcrumbs } from '../../components/common/DynamicBreadcrumbs';

export function Catalog() {
  return (
    <PageContainer>
      <DynamicBreadcrumbs />
      <Typography variant="h4">Catalog</Typography>
    </PageContainer>
  );
}
