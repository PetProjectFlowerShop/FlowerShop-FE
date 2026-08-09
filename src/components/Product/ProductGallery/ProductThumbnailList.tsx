import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import type { ProductImageType } from '@/types/product';

type ProductThumbnailListProps = {
  thumbnails: ProductImageType[];
  onSwiper: (swiper: SwiperType) => void;
};

const styles = {
  list: {
    display: { xs: 'none', tablet: 'flex' },
    flexDirection: 'column',
    width: { tablet: '160px', desktop: '196px' },
    flexShrink: 0,
    maxHeight: { tablet: '420px', desktop: '550px' },

    '& .swiper': {
      width: '100%',
      height: '100%',
    },

    '& .swiper-wrapper': {
      gap: { tablet: '4px', desktop: '24px' },
    },

    '& .swiper-slide': {
      width: '100%',
      height: { tablet: '137px', desktop: '167px' },
      opacity: 0.5,
      transition: 'opacity 0.2s ease',
    },

    '& .swiper-slide-thumb-active': {
      opacity: 1,
    },

    '&::-webkit-scrollbar': {
      display: 'none',
    },

    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  },

  thumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '16px',
    cursor: 'pointer',
  },
};

export const ProductThumbnailList = ({ thumbnails, onSwiper }: ProductThumbnailListProps) => {
  return (
    <Box sx={styles.list}>
      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={onSwiper}
        direction="vertical"
        slidesPerView="auto"
      >
        {thumbnails.map((thumbnail) => (
          <SwiperSlide key={thumbnail.id}>
            <Box
              component="img"
              src={thumbnail.imageUrl}
              alt={`Thumbnail ${thumbnail.id}`}
              sx={styles.thumbnail}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
