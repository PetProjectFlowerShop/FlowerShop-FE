import { useParams } from 'react-router-dom';
import CustomersReviewsSection from '../components/home/CustomersReviewsSection';
import RecentlyViewedSection from '../components/home/RecentlyViewedSection';
import { DynamicBreadcrumbs } from '../components/common/DynamicBreadcrumbs';
import { PageContainer } from '../components/common/PageContainer';
import AccessoriesSection from '../components/home/AccessoriesSection';

export function ProductPage() {
  const { id } = useParams();

  if (!id) return <div>No product</div>;

  return (
    <PageContainer>
      <DynamicBreadcrumbs />
      <AccessoriesSection />
      <RecentlyViewedSection />
      <CustomersReviewsSection isReview={true} />
    </PageContainer>
  );
}
