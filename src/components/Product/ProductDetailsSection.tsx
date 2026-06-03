import { Box } from '@mui/material';
import { ProductInfo } from './ProductInfo/ProductInfo';
import type { Product } from '@/types/product';
import { ProductGallery } from './ProductImages/ProductGallery';
import img1 from '@/assets/images/imagePlaceholder.webp';
import img2 from '@/assets/images/imagePlaceholder2.webp';
import img3 from '@/assets/images/imagePlaceholder3.webp';
import img4 from '@/assets/images/imagePlaceholder4.webp';
import { CustomSection } from '../common/CustomSection';

const MOCK_IMAGES = [img1, img2, img3, img4];

export function ProductDetailsSection({ data }: { data: Product }) {
  const imagesToShow = MOCK_IMAGES;
  return (
    <CustomSection data-testid="product-details-section">
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: '1fr',
          desktop: '1fr 1fr',
        }}
        gap={{ tablet: 3, desktop: 8 }}
        alignItems="start"
      >
        <Box sx={{ position: { desktop: 'sticky' }, top: { desktop: '104px' } }}>
          <ProductGallery images={imagesToShow} />
        </Box>
        <ProductInfo data={data} />
      </Box>
    </CustomSection>
  );
}
