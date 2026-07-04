import { Box } from '@mui/material';
import { ProductInfo } from './ProductInfo/ProductInfo';
import type { Product } from '@/types/product';
import { ProductGallery } from './ProductImages/ProductGallery';
import img1 from '@/assets/images/imagePlaceholder.webp';
import img2 from '@/assets/images/imagePlaceholder2.webp';
import img3 from '@/assets/images/imagePlaceholder3.webp';
import img4 from '@/assets/images/imagePlaceholder4.webp';
import { AccessoriesCarousel } from '../common/AccessoriesCarousel';
import accessories from '@/assets/images/accessories.webp';
import { SectionContainer } from '../layouts/SectionContainer';

const MOCK_IMAGES = [img1, img2, img3, img4];

const MOCK_ACCESSORIES = [
  { id: '1', title: 'Vase Perfeqta', price: 28, imgURL: accessories },
  { id: '2', title: 'Candle Floria', price: 23, imgURL: accessories },
  { id: '3', title: 'Flori Frame', price: 12, imgURL: accessories },
  { id: '4', title: 'Rosie Candle', price: 18, imgURL: accessories },
  { id: '5', title: 'Aroma Stick', price: 15, imgURL: accessories },
];

export function ProductDetailsSection({ data }: { data: Product }) {
  const imagesToShow = MOCK_IMAGES;
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
            <ProductGallery images={imagesToShow} />
          </Box>
          <ProductInfo data={data} />
        </Box>
        <AccessoriesCarousel accessories={MOCK_ACCESSORIES} showPagination={true} />
      </SectionContainer>
    </section>
  );
}
