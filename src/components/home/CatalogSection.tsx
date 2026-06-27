import { sampleCatalogProducts } from '@/api/mock-data/sampleCatalogProducts';
import { useFavoritesStore } from '@/store/favorites.store';
import { CardsCarousel } from '../common/CardsCarousel';
import { ProductCard } from '../common/ProductCard';
import { SectionHeader } from '../common/SectionHeader';
import { SectionContainer } from '../layouts/SectionContainer';
import { CatalogBanner } from './CatalogBanner';

export default function CatalogSection() {
  const favorites = useFavoritesStore((s) => s.items);
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  return (
    <section data-testid="catalog-section">
      <SectionContainer>
        <SectionHeader title="Catalog" subtitle="Explore our beautiful bouquets" />

        <CardsCarousel
          cards={sampleCatalogProducts}
          renderCard={(product) => (
            <ProductCard
              isFavorite={!!favorites[product.id]}
              onFavoriteClick={() => toggleFavorite(product.id)}
              product={product}
            />
          )}
        />
      </SectionContainer>
      <CatalogBanner />
    </section>
  );
}
