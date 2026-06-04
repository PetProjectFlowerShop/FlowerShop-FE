import { Box } from '@mui/material';

import type { Product } from '@/types/product';
import { useState } from 'react';
import { ProductAccordion } from './ProductAccordion/ProductAccordion';
import { ProductHeader } from './ProductHeader';
import { ProductQuantityControls } from './ProductQuantityControls';
import { ProductWrapSelect } from './ProductWrapSelect';

import { useFavoritesStore } from '@/store/favorites.store';

export function ProductInfo({ data }: { data: Product }) {
  const { id, title, price, description, type, packagingType: packagingOptions } = data;

  const favorites = useFavoritesStore((s) => s.items);
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  const [quantity, setQuantity] = useState(1);
  const [selectedWrap, setSelectedWrap] = useState(packagingOptions[0]?.key ?? '');
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <ProductHeader
        price={price}
        title={title}
        isFavorite={!!favorites[data.id]}
        onFavoriteClick={() => toggleFavorite(id)}
      />
      <ProductWrapSelect
        selectedWrap={selectedWrap}
        onWrapChange={setSelectedWrap}
        packagingOptions={packagingOptions}
      />
      <ProductQuantityControls
        productId={id}
        wrapType={selectedWrap}
        quantity={quantity}
        onQuantityChange={setQuantity}
        isFavorite={!!favorites[data.id]}
        onFavoriteClick={() => toggleFavorite(id)}
      />
      <ProductAccordion description={description} type={type} title={title} />
    </Box>
  );
}
