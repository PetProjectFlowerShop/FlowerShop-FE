import { Box, IconButton, useTheme, type Theme } from '@mui/material';
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

const NAV_CLASSES = {
  prev: 'swiper-button-prev-custom',
  next: 'swiper-button-next-custom',
};

const SWIPER_BREAKPOINTS = {
  600: { slidesPerView: 2 },
  900: { slidesPerView: 3 },
  1200: { slidesPerView: 4 },
};

const getCarouselStyles = (theme: Theme) => ({
  position: 'relative',
  '& .swiper': {
    paddingBottom: '48px',
    paddingTop: theme.spacing(theme.spacingTokens.micro),
  },
  '& .swiper-pagination': {
    bottom: '0px !important',
  },
  '& .swiper-pagination-bullet': {
    width: theme.spacing(theme.spacingTokens.micro),
    height: theme.spacing(theme.spacingTokens.micro),
    backgroundColor: 'action.disabled',
    opacity: 1,
    margin: '0 6px !important',
    transition: 'all 0.3s ease',
  },
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
});

const getNavButtonStyles = (theme: Theme) => ({
  position: 'absolute',
  top: `calc(50% - ${theme.spacing(theme.spacingTokens.stackM)})`,
  transform: 'translateY(-50%)',
  zIndex: 10,
  backgroundColor: 'common.white',
  boxShadow: 2,
  display: { xs: 'none', md: 'flex' },
  color: 'text.primary',
  '&:hover': { backgroundColor: 'grey.100' },
  '&.swiper-button-disabled': {
    color: 'action.disabled',
    cursor: 'default',
    boxShadow: 1,
  },
});

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const theme = useTheme();
  return (
    <Box sx={getCarouselStyles}>
      <IconButton
        className={NAV_CLASSES.prev}
        sx={[
          getNavButtonStyles(theme),
          {
            left: { md: `-${theme.spacing(theme.spacingTokens.stackM)}` },
          },
        ]}
      >
        <Icon name="arrow-left" width={24} height={24} fill="currentColor" />
      </IconButton>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={theme.spacingTokens.stackM * 4}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: `.${NAV_CLASSES.prev}`,
          nextEl: `.${NAV_CLASSES.next}`,
        }}
        breakpoints={SWIPER_BREAKPOINTS}
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
        className={NAV_CLASSES.next}
        sx={[
          getNavButtonStyles(theme),
          {
            right: { md: `-${theme.spacing(theme.spacingTokens.stackM)}` },
          },
        ]}
      >
        <Icon name="arrow-right" width={24} height={24} fill="currentColor" />
      </IconButton>
    </Box>
  );
};
