import accessories from '@/assets/images/accessories.webp';
import type { ProductDetails } from '@/types/product';
import { Box } from '@mui/material';
import { AccessoriesCarousel } from '../common/AccessoriesCarousel';
import { SectionContainer } from '../layouts/SectionContainer';
import { ProductGallery } from './ProductGallery/ProductGallery';
import { ProductInfo } from './ProductInfo/ProductInfo';

const MOCK_ACCESSORIES = [
  { id: '1', title: 'Vase Perfeqta', price: 28, imgURL: accessories },
  { id: '2', title: 'Candle Floria', price: 23, imgURL: accessories },
  { id: '3', title: 'Flori Frame', price: 12, imgURL: accessories },
  { id: '4', title: 'Rosie Candle', price: 18, imgURL: accessories },
  { id: '5', title: 'Aroma Stick', price: 15, imgURL: accessories },
];

export function ProductDetailsSection({ data }: { data: ProductDetails }) {
  return (
    <section data-testid="product-details-section">
      <SectionContainer>
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: '1fr',
            desktop: '1fr 1fr',
          }}
          gap={{ tablet: 3, desktop: 8 }}
          alignItems="start"
          mb={10}
        >
          <Box sx={{ position: { desktop: 'sticky' }, top: { desktop: '104px' } }}>
            <ProductGallery images={data.images} />
          </Box>
          <ProductInfo {...data} />
        </Box>
        <AccessoriesCarousel accessories={MOCK_ACCESSORIES} showPagination={true} />
      </SectionContainer>
    </section>
  );
}
