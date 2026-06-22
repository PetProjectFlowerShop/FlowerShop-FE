import { sampleRecommendedProducts } from '@/api/mock-data/sampleRecommendedProducts';
import { useFavoritesStore } from '@/store/favorites.store';
import { CardsCarousel } from '../common/CardsCarousel';
import { ProductCard } from '../common/ProductCard';
import { SectionHeader } from '../common/SectionHeader';
import { SectionContainer } from '../layout/SectionContainer';

type RecommendationsSectionProps = {
  title: string;
  subtitle?: string;
};

export default function RecommendationsSection({ title, subtitle }: RecommendationsSectionProps) {
  const favorites = useFavoritesStore((s) => s.items);
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  return (
    <section>
      <SectionContainer>
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
      </SectionContainer>
    </section>
  );
}
