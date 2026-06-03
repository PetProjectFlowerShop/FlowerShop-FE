import { Container } from '@mui/material';
import { CustomSection } from '../common/CustomSection';
import { SectionHeader } from '../common/SectionHeader';
import { ProductCard } from '../common/ProductCard';
import { CardsCarousel } from '../common/CardsCarousel';
import { sampleRecommendedProducts } from '@/api/mock-data/sampleRecommendedProducts';
import { useFavorites } from '@/hooks/useFavorite';
import { useMemo } from 'react';

export default function RecommendationsSection() {
  const { favorites, toggle } = useFavorites();

  const favoriteSet = useMemo(() => new Set(favorites), [favorites]);
  return (
    <CustomSection data-testid="reccomendation-section">
      <Container>
        <SectionHeader title="Our recommendations" subtitle="Perfect for special moments" />
        <CardsCarousel
          cards={sampleRecommendedProducts}
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
