import AboutUsSection from '../components/home/AboutUsSection';
import CatalogSection from '../components/home/CatalogSection';
import HeroSection from '../components/home/HeroSection';
import PromoSection from '../components/home/PromoSection';
import RecommendedSection from '../components/home/RecommendedSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <RecommendedSection />
      <PromoSection />
      <CatalogSection />
      <AboutUsSection />
    </>
  );
}
