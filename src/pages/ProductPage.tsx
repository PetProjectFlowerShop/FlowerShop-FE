import { useParams } from 'react-router-dom';
import CustomersReviewsSection from '../components/home/CustomersReviewsSection';
import RecentlyViewedSection from '../components/home/RecentlyViewedSection';
import { DynamicBreadcrumbs } from '../components/common/DynamicBreadcrumbs';
import { ProductDetailsSection } from '../components/Product/ProductDetailsSection';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../api/products';
import { useEffect } from 'react';
import { useRecentlyStore } from '@/store/recently.store';
import { PageLayout } from '@/components/layouts/PageLayout';

export function ProductPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id!),
    enabled: !!id,
  });
  const addProduct = useRecentlyStore((state) => state.addProduct);
  useEffect(() => {
    if (!data?.id) return;

    addProduct(data.id);
  }, [data?.id, addProduct]);

  if (!id) return <div>No product</div>;
  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error loading product</div>;

  return (
    <>
      <DynamicBreadcrumbs customLastStep={data.title} mb={{ xs: 7, tablet: 10 }} />
      <PageLayout>
        <ProductDetailsSection data={data} />
        <RecentlyViewedSection />
        <CustomersReviewsSection isReview={true} />
      </PageLayout>
    </>
  );
}
