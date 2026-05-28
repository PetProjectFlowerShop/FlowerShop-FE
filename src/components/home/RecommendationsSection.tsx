import { Container } from '@mui/material';
import { CustomSection } from '../common/CustomSection';
import { SectionHeader } from '../common/SectionHeader';
import { ProductCard } from '../common/ProductCard';
import { CardsCarousel } from '../common/CardsCarousel';
import { sampleRecommendedProducts } from '@/api/mock-data/sampleRecommendedProducts';

export default function RecommendationsSection() {
  return (
    <CustomSection data-testid="reccomendation-section">
      <Container>
        <SectionHeader title="Our recommendations" subtitle="Perfect for special moments" />
        <CardsCarousel
          cards={sampleRecommendedProducts}
          renderCard={(product) => <ProductCard product={product} />}
        />
      </Container>
    </CustomSection>
  );
}
