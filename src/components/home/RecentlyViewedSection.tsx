import { Container } from '@mui/material';
import { CustomSection } from '../common/CustomSection';
import { SectionHeader } from '../common/SectionHeader';
import { CardsCarousel } from '../common/CardsCarousel';
import { ProductCard } from '../common/ProductCard';
import { sampleCatalogProducts } from '../../api/mock-data/sampleCatalogProducts';

export default function RecentlyViewedSection() {
  return (
    <CustomSection data-testid="recently-viewed-section">
      <Container>
        <SectionHeader title="Recently viewed" subtitle="" />

        <CardsCarousel
          cards={sampleCatalogProducts}
          renderCard={(product) => <ProductCard product={product} />}
        />
      </Container>
    </CustomSection>
  );
}
