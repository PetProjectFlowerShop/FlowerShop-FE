import { useFavoritesStore } from '@/store/favorites.store';
import { useQuery } from '@tanstack/react-query';
import { CardsCarousel } from '../common/CardsCarousel';

import { getRecommendationsProducts } from '@/api/flowers';
import { SectionHeader } from '../common/SectionHeader';
import { SectionContainer } from '../layouts/SectionContainer';
import { ProductCard } from '../ProductCard';
import { ProductCardSkeleton } from '../skelton/ProductCardSkeleton';

type RecommendationsSectionProps = {
  title: string;
  subtitle?: string;
};

export default function RecommendationsSection({ title, subtitle }: RecommendationsSectionProps) {
  const favorites = useFavoritesStore((s) => s.items);

  const { data, isPending, isError } = useQuery({
    queryKey: ['recommendation-products'],
    queryFn: getRecommendationsProducts,
  });

  if (isError) {
    return null;
  }

  return (
    <section data-testid="reccomendation-section">
      <SectionContainer>
        <SectionHeader title={title} subtitle={subtitle} mb={7} gap={2} />
        {isPending ? (
          <CardsCarousel
            cards={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
            renderCard={() => <ProductCardSkeleton />}
          />
        ) : (
          <CardsCarousel
            cards={data}
            renderCard={(product) => (
              <ProductCard product={product} isFavorite={!!favorites[product.id]} />
            )}
          />
        )}
      </SectionContainer>
    </section>
  );
}
