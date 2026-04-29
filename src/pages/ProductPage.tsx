import { useParams } from 'react-router-dom';
import CustomersReviewsSection from '../components/home/CustomersReviewsSection';
import RecentlyViewedSection from '../components/home/RecentlyViewedSection';

export function ProductPage() {
  const { id } = useParams();
  if (!id) return <div>No product</div>;
  return (
    <>
      <RecentlyViewedSection />
      <CustomersReviewsSection isReview={true} />
    </>
  );
}
