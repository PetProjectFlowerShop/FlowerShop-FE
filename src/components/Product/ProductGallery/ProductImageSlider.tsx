import { Box } from '@mui/material';
import { Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import type { ProductImageType } from '@/types/product';

type ProductImageSliderProps = {
  images: ProductImageType[];
  thumbsSwiper: SwiperType | null;
};

const styles = {
  container: {
    flex: 1,
    minWidth: 0,
    maxWidth: { tablet: '520px', desktop: '416px' },
    maxHeight: { tablet: '420px', desktop: '550px' },
    aspectRatio: {
      xs: '1 / 1',
      tablet: '520 / 420',
      desktop: '416 / 550',
    },
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative',
  },

  swiper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  } satisfies React.CSSProperties,

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    borderRadius: '16px',
  },
};

export const ProductImageSlider = ({ images, thumbsSwiper }: ProductImageSliderProps) => {
  return (
    <Box sx={styles.container}>
      <Swiper
        modules={[Pagination, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        loop
        spaceBetween={16}
        pagination={{ clickable: true }}
        style={styles.swiper}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Box component="img" src={image.imageUrl} alt="" sx={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
