import { sampleRecommendedProducts } from '@/api/mock-data/sampleRecommendedProducts';
import { useFavoritesStore } from '@/store/favorites.store';
import { Container } from '@mui/material';
import { CardsCarousel } from '../common/CardsCarousel';
import { CustomSection } from '../common/CustomSection';
import { ProductCard } from '../common/ProductCard';
import { SectionHeader } from '../common/SectionHeader';

type RecommendationsSectionProps = {
  title: string;
  subtitle?: string;
};

export default function RecommendationsSection({ title, subtitle }: RecommendationsSectionProps) {
  const favorites = useFavoritesStore((s) => s.items);
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  return (
    <CustomSection data-testid="reccomendation-section">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />
        <CardsCarousel
          cards={sampleRecommendedProducts}
          renderCard={(product) => (
            <ProductCard
              product={product}
              isFavorite={!!favorites[product.id]}
              onFavoriteClick={() => toggleFavorite(product.id)}
            />
          )}
        />
      </Container>
    </CustomSection>
  );
}
