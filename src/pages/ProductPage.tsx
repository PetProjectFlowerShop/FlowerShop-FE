import { getProductById } from '@/api/flowers';
import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';
import CustomersReviewsSection from '@/components/home/CustomersReviewsSection';
import RecentlyViewedSection from '@/components/home/RecentlyViewedSection';
import { PageLayout } from '@/components/layouts/PageLayout';
import { ProductDetailsSection } from '@/components/Product/ProductDetailsSection';
import { useRecentlyStore } from '@/store/recently.store';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function ProductPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById({ id: Number(id) }),
    enabled: !!id,
    throwOnError: (error) => axios.isAxiosError(error) && error.response?.status === 503,
  });

  const addProduct = useRecentlyStore((state) => state.addProduct);

  useEffect(() => {
    if (!data?.id) return;

    addProduct(data.id);
  }, [data?.id, addProduct]);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error loading product</div>;

  return (
    <>
      <DynamicBreadcrumbs customLastStep={data.name} mb={{ xs: 7, tablet: 10 }} />
      <PageLayout>
        <ProductDetailsSection data={data} />
        <RecentlyViewedSection />
        <CustomersReviewsSection isReview={true} />
      </PageLayout>
    </>
  );
}
