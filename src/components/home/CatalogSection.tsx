import { sampleCatalogProducts } from '@/api/mock-data/sampleCatalogProducts';
import { useFavoritesStore } from '@/store/favorites.store';
import { Container } from '@mui/material';
import { CardsCarousel } from '../common/CardsCarousel';
import { CustomSection } from '../common/CustomSection';
import { ProductCard } from '../common/ProductCard';
import { SectionHeader } from '../common/SectionHeader';
import { CatalogBanner } from './CatalogBanner';

export default function CatalogSection() {
  const favorites = useFavoritesStore((s) => s.items);
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  return (
    <CustomSection data-testid="catalog-section">
      <Container>
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
        <CatalogBanner />
      </Container>
    </CustomSection>
  );
}
