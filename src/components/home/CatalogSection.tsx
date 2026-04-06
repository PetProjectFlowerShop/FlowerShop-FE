import { Container } from '@mui/material';
import { CustomSection } from '../common/CustomSection';
import { SectionHeader } from '../common/SectionHeader';
import { CardsCarousel } from '../common/CardsCarousel';
import { ProductCard } from '../common/ProductCard';
import { CatalogBanner } from './CatalogBanner';
import { sampleCatalogProducts } from '../../api/mock-data/sampleCatalogProducts';

export default function CatalogSection() {
  return (
    <CustomSection>
      <Container>
        <SectionHeader title="Catalog" subtitle="Explore our beautiful bouquets" />

        <CardsCarousel
          cards={sampleCatalogProducts}
          renderCard={(product) => <ProductCard product={product} />}
        />
        <CatalogBanner />
      </Container>
    </CustomSection>
  );
}
