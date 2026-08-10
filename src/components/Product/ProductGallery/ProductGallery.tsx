import { Box } from '@mui/material';

import type { ProductImageType } from '@/types/product';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { ProductImageSlider } from './ProductImageSlider';
import { ProductThumbnailList } from './ProductThumbnailList';

interface ProductGalleryProps {
  images: ProductImageType[];
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: { xs: 'column', tablet: 'row' },
    gap: { xs: 2, tablet: 2, desktop: 3 },

    '& .swiper': {
      width: '100%',
      height: '100%',
      paddingBottom: { xs: '32px', tablet: '0px' },
    },

    '& .swiper-pagination': {
      display: { tablet: 'none' },
      bottom: '0 !important',
    },

    '& .swiper-pagination-bullet': {
      backgroundColor: '#9CA3AF',
      opacity: 1,
      width: '8px',
      height: '8px',
      transition: 'background-color 0.3s ease',
    },

    '& .swiper-pagination-bullet-active': {
      backgroundColor: '#B8727D',
    },
  },
};

export function ProductGallery({ images }: ProductGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <Box sx={styles.root}>
      <ProductThumbnailList thumbnails={images} onSwiper={setThumbsSwiper} />
      <ProductImageSlider images={images} thumbsSwiper={thumbsSwiper} />
    </Box>
  );
}
