import { Container } from '@mui/material';
import { CustomSection } from '../common/CustomSection';
import { SectionHeader } from '../common/SectionHeader';
import { ProductCard } from '../common/ProductCard';
import { CardsCarousel } from '../common/CardsCarousel';
import { sampleRecommendedProducts } from '../../api/mock-data/sampleRecommendedProducts';

export default function RecommendedSection() {
  return (
    <CustomSection>
      <Container>
        <SectionHeader title="Our recommended" subtitle="Perfect for special moments" />

        <CardsCarousel
          cards={sampleRecommendedProducts}
          renderCard={(product) => <ProductCard product={product} />}
        />
      </Container>
    </CustomSection>
  );
}
