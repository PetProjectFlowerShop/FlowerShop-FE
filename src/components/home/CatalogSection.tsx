import { useFavoritesStore } from '@/store/favorites.store';
import { CardsCarousel } from '../common/CardsCarousel';

import { SectionHeader } from '../common/SectionHeader';
import { SectionContainer } from '../layouts/SectionContainer';
import { ProductCard } from '../ProductCard';
import { CatalogBanner } from './CatalogBanner';
import { useQuery } from '@tanstack/react-query';
import { getCatalogProducts } from '@/api/flowers';
import { ProductCardSkeleton } from '../skelton/ProductCardSkeleton';

export default function CatalogSection() {
  const favorites = useFavoritesStore((s) => s.items);
  const { data, isPending, isError } = useQuery({
    queryKey: ['recommendation-products2'],
    queryFn: getCatalogProducts,
  });
  if (isError) {
    return null;
  }
  console.log('catalog products', data);
  return (
    <section data-testid="catalog-section">
      <SectionContainer>
        <SectionHeader title="Catalog" subtitle="Explore our beautiful bouquets" />
        {isPending ? (
          <CardsCarousel
            cards={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
            renderCard={() => <ProductCardSkeleton />}
          />
        ) : (
          <CardsCarousel
            cards={data}
            renderCard={(product) => (
              <ProductCard isFavorite={!!favorites[product.id]} product={product} />
            )}
          />
        )}
      </SectionContainer>
      <CatalogBanner />
    </section>
  );
}
