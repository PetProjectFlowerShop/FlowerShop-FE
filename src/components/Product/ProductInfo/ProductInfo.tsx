import { Box } from '@mui/material';

export function ProductInfo() {
  // const favorites = useFavoritesStore((s) => s.items);
  // const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  // const [quantity, setQuantity] = useState(1);
  // const [selectedWrap, setSelectedWrap] = useState(packagingOptions[0]?.key ?? '');
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {/* <ProductHeader
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
      <ProductAccordion description={description} type={type} title={title} /> */}
    </Box>
  );
}
