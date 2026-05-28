import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';
import { PageContainer } from '@/components/common/PageContainer';
import { Typography } from '@mui/material';

export function DeliveryAndPayment() {
  return (
    <PageContainer>
      <DynamicBreadcrumbs />
      <Typography variant="h4">Delivery & Payment</Typography>
    </PageContainer>
  );
}
