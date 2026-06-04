import { Container } from '@mui/material';
import { CustomSection } from '../common/CustomSection';
import { SectionHeader } from '../common/SectionHeader';
import { ProductCard } from '../common/ProductCard';
import { CardsCarousel } from '../common/CardsCarousel';
import { sampleRecommendedProducts } from '@/api/mock-data/sampleRecommendedProducts';
import { useFavorites } from '@/hooks/useFavorite';
import { useMemo } from 'react';

type RecommendationsSectionProps = {
  title: string;
  subtitle?: string;
};

export default function RecommendationsSection({ title, subtitle }: RecommendationsSectionProps) {
  const { favorites, toggle } = useFavorites();

  const favoriteSet = useMemo(() => new Set(favorites), [favorites]);

  return (
    <CustomSection data-testid="reccomendation-section">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />
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
