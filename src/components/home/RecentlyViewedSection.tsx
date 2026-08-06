import { useFavoritesStore } from '@/store/favorites.store';

import { CardsCarousel } from '../common/CardsCarousel';

import { SectionHeader } from '../common/SectionHeader';
import { SectionContainer } from '../layouts/SectionContainer';

import { useRecentlyStore } from '@/store/recently.store';
import type { ProductCardType } from '@/types/product';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../ProductCard';

async function getRecentlyViewedProducts(ids: number[]) {
  try {
    const params = new URLSearchParams();

    ids.forEach((id) => {
      params.append('ids', String(id));
    });

    const { data } = await axios.get<ProductCardType[]>('api/flowers/batch', {
      params,
    });

    return data;
  } catch (err) {
    console.error('Request failed:', err);
    throw err;
  }
}

export default function RecentlyViewedSection() {
  const favorites = useFavoritesStore((s) => s.items);
  const ids = useRecentlyStore((s) => s.items);
  const { id } = useParams();

  const currentProductId = id ? Number(id) : undefined;

  const filteredIds = currentProductId ? ids.filter((id) => id !== currentProductId) : ids;

  const { data } = useQuery({
    queryKey: ['recently-viewed', filteredIds.join(',')],
    queryFn: () => getRecentlyViewedProducts(filteredIds),
    enabled: ids.length > 0,
  });

  if (!data || !data.length) {
    return null;
  }

  return (
    <section data-testid="recently-viewed-section">
      <SectionContainer data-testid="recently-viewed-section">
        <SectionHeader title="Recently viewed" />
        <CardsCarousel
          cards={data}
          renderCard={(product: ProductCardType) => (
            <ProductCard product={product} isFavorite={!!favorites[product.id]} />
          )}
        />
      </SectionContainer>
    </section>
  );
}
