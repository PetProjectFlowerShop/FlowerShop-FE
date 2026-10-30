import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';
import { PageLayout } from '@/components/layouts/PageLayout';
import { SectionContainer } from '@/components/layouts/SectionContainer';
import { Typography } from '@mui/material';
import { CheckoutPage } from '@/components/checkout/CheckoutPage';

export function Checkout() {
  return (
    <>
      <DynamicBreadcrumbs mb={{ xs: 2 }} />
      <PageLayout>
        <SectionContainer>
          <Typography variant="h2" component="h1" mb={10}>
            Order process
          </Typography>
          <CheckoutPage />
        </SectionContainer>
      </PageLayout>
    </>
  );
}
