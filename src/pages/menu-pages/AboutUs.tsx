import { Typography } from '@mui/material';
import { PageContainer } from '@/components/common/PageContainer';
import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';

export function AboutUs() {
  return (
    <PageContainer>
      <DynamicBreadcrumbs />
      <Typography variant="h4">About Us</Typography>
    </PageContainer>
  );
}
