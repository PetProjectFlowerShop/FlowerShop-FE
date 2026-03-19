import { Box, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ProductCard, type Product } from './ProductCard';
import { Icon } from './Icon';

interface ProductCarouselProps {
  products: Product[];
}

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        '& .swiper-pagination': { bottom: '-30px' },
        '& .swiper-pagination-bullet': { width: '8px', height: '8px', transition: 'all 0.3s' },
        '& .swiper-pagination-bullet-active': {
          backgroundColor: 'secondary.main',
          width: '10px',
          height: '10px',
        },
        '& .swiper-slide': {
          height: 'auto',
          display: 'flex',
        },
        '& .swiper-slide > div': {
          width: '100%',
        },
      }}
    >
      <IconButton
        className="swiper-button-prev-custom"
        sx={{
          position: 'absolute',
          top: '50%',
          left: { md: '-24px' },
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'common.white',
          boxShadow: 2,
          display: { xs: 'none', md: 'flex' },
          '&:hover': { backgroundColor: 'grey.100' },
          color: 'text.primary',
          '&.swiper-button-disabled': {
            color: 'action.disabled',
            cursor: 'default',
            boxShadow: 1,
          },
        }}
      >
        <Icon name="arrow-left" width={24} height={24} fill="currentColor" />
      </IconButton>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{ prevEl: '.swiper-button-prev-custom', nextEl: '.swiper-button-next-custom' }}
        breakpoints={{
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        style={{ paddingBottom: '40px', paddingTop: '40px' }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              product={product}
              onFavoriteClick={(id) => console.log('Favorite:', id)}
              onAddToCartClick={(id) => console.log('Buying:', id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <IconButton
        className="swiper-button-next-custom"
        sx={{
          position: 'absolute',
          top: '50%',
          right: { md: '-24px' },
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'common.white',
          boxShadow: 2,
          display: { xs: 'none', md: 'flex' },
          '&:hover': { backgroundColor: 'grey.100' },
          color: 'text.primary',
          '&.swiper-button-disabled': {
            color: 'action.disabled',
            cursor: 'default',
            boxShadow: 1,
          },
        }}
      >
        <Icon name="arrow-right" width={24} height={24} fill="currentColor" />
      </IconButton>
    </Box>
  );
};
