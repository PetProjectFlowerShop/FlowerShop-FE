import { MOCK_ACCESSORIES } from '@/api/mock-data/mockAccessories';
import type { ProductDetails } from '@/types/product';
import { Box } from '@mui/material';
import { AccessoriesCarousel } from '../common/AccessoriesCarousel';
import { SectionContainer } from '../layouts/SectionContainer';
import { ProductGallery } from './ProductGallery/ProductGallery';
import { ProductInfo } from './ProductInfo/ProductInfo';

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
        <AccessoriesCarousel gap={6} accessories={MOCK_ACCESSORIES} showPagination={true} />
      </SectionContainer>
    </section>
  );
}
