import { Container } from '@mui/material';
import { CustomSection } from '../common/CustomSection';
import { SectionHeader } from '../common/SectionHeader';
import { CardsCarousel } from '../common/CardsCarousel';
import { ProductCard } from '../common/ProductCard';
import { CatalogBanner } from './CatalogBanner';
import { sampleCatalogProducts } from '@/api/mock-data/sampleCatalogProducts';
import { useFavorites } from '@/hooks/useFavorite';
import { useMemo } from 'react';

export default function CatalogSection() {
  const { favorites, toggle } = useFavorites();

  const favoriteSet = useMemo(() => new Set(favorites), [favorites]);
  return (
    <CustomSection data-testid="catalog-section">
      <Container>
        <SectionHeader title="Catalog" subtitle="Explore our beautiful bouquets" />

        <CardsCarousel
          cards={sampleCatalogProducts}
          renderCard={(product) => (
            <ProductCard
              isFavorite={favoriteSet.has(product.id)}
              onFavoriteClick={() => toggle(product.id)}
              product={product}
            />
          )}
        />
        <CatalogBanner />
      </Container>
    </CustomSection>
  );
}
