import { PageLayout } from '@/components/layouts/PageLayout';
import AboutUsSection from '../components/home/AboutUsSection';
import CatalogSection from '../components/home/CatalogSection';
import CustomersReviewsSection from '../components/home/CustomersReviewsSection';
import HeroSection from '../components/home/HeroSection';
import PromoSection from '../components/home/PromoSection';
import RecommendationsSection from '../components/home/RecommendationsSection';
import FaqSection from '../components/home/faq/FaqSection';

export function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <RecommendationsSection title="Recommendations" subtitle="Perfect for special moments" />
      <PromoSection />
      <CatalogSection />
      <AboutUsSection />
      <CustomersReviewsSection isCentered={true} />
      <FaqSection />
    </PageLayout>
  );
}
