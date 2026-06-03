import { Container } from '@mui/material';
import { CustomSection } from '../common/CustomSection';
import { SectionHeader } from '../common/SectionHeader';
import { CardsCarousel } from '../common/CardsCarousel';
import { ProductCard } from '../common/ProductCard';
import { sampleCatalogProducts } from '@/api/mock-data/sampleCatalogProducts';
import { useFavorites } from '@/hooks/useFavorite';
import { useMemo } from 'react';

export default function RecentlyViewedSection() {
  const { favorites, toggle } = useFavorites();

  const favoriteSet = useMemo(() => new Set(favorites), [favorites]);
  return (
    <CustomSection data-testid="recently-viewed-section">
      <Container>
        <SectionHeader title="Recently viewed" subtitle="" />

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
      </Container>
    </CustomSection>
  );
}
