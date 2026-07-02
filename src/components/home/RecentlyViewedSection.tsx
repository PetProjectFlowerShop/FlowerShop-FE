import { useFavoritesStore } from '@/store/favorites.store';
import type { Product } from '@/types/product';

import { CardsCarousel } from '../common/CardsCarousel';
import { ProductCard } from '../common/ProductCard';
import { SectionHeader } from '../common/SectionHeader';
import { SectionContainer } from '../layouts/SectionContainer';

import { getProductsByIds } from '@/api/products';
import { useRecentlyStore } from '@/store/recently.store';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function RecentlyViewedSection() {
  const favorites = useFavoritesStore((s) => s.items);
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const ids = useRecentlyStore((s) => s.items);
  const { id: currentProductId } = useParams();

  const filteredIds = currentProductId ? ids.filter((id) => id !== currentProductId) : ids;

  const { data } = useQuery({
    queryKey: ['recently-viewed', filteredIds.join(',')],
    queryFn: () => getProductsByIds(filteredIds),
    enabled: ids.length > 0,
  });

  if (!data || !data.length) {
    return null;
  }

  return (
    <section data-testid="recently-viewed-section">
      <SectionContainer>
        <SectionHeader title="Recently viewed" />
        <CardsCarousel
          cards={data}
          renderCard={(product: Product) => (
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
