import { Container } from '@mui/material';

import type { Product } from '@/types/product';
import { useFavoritesStore } from '@/store/favorites.store';

import { CardsCarousel } from '../common/CardsCarousel';
import { CustomSection } from '../common/CustomSection';
import { ProductCard } from '../common/ProductCard';
import { SectionHeader } from '../common/SectionHeader';

import { sampleCatalogProducts } from '@/api/mock-data/sampleCatalogProducts';

export default function RecentlyViewedSection() {
  const favorites = useFavoritesStore((s) => s.items);
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  return (
    <CustomSection data-testid="recently-viewed-section">
      <Container>
        <SectionHeader title="Products" />

        <CardsCarousel
          cards={sampleCatalogProducts}
          renderCard={(product: Product) => (
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
