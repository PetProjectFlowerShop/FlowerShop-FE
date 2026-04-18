import { DynamicBreadcrumbs } from '../../components/common/DynamicBreadcrumbs';
import { PageContainer } from '../../components/common/PageContainer';
import { Typography } from '@mui/material';

export function Contacts() {
  return (
    <PageContainer>
      <DynamicBreadcrumbs />
      <Typography variant="h4">Contacts</Typography>
    </PageContainer>
  );
}
