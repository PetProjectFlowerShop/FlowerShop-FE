import { Box, IconButton, useTheme, type Theme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useId, useMemo, type ReactNode } from 'react';
import { Icon } from './Icon';

interface CardsCarouselProps<T extends { id: string }> {
  cards: T[];
  renderCard: (card: T) => ReactNode;
  centered?: boolean;
}

const SWIPER_BREAKPOINTS = {
  0: { slidesPerView: 1.5, spaceBetween: 24 },
  600: { slidesPerView: 2, spaceBetween: 24 },
  900: { slidesPerView: 3, spaceBetween: 24 },
  1200: { slidesPerView: 4, spaceBetween: 24 },
};

const CENTERED_BREAKPOINTS = {
  0: { slidesPerView: 1.5, spaceBetween: 16 },
  600: { slidesPerView: 2.5, spaceBetween: 16 },
  900: { slidesPerView: 3, spaceBetween: 16 },
};

const getCarouselStyles = (theme: Theme, centered?: boolean) => ({
  position: 'relative',
  '& .swiper': {
    paddingBottom: centered ? '30px' : '20px',
    paddingTop: centered ? '40px' : theme.spacing(theme.spacingTokens.micro),
  },
  '& .swiper-wrapper': {
    alignItems: centered ? 'center' : 'stretch',
  },
  '& .swiper-pagination': {
    bottom: '0px !important',
  },
  '& .swiper-pagination-bullets': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    transition: 'transform 0.4s ease, opacity 0.4s ease',

    ...(centered && {
      transform: 'scale(0.85)',
    }),
  },
  '& .swiper-slide > *': {
    width: '100% !important',
    maxWidth: 'none !important',
    flexGrow: 1,
  },
  ...(centered && {
    '& .swiper-slide-active': {
      transform: 'scale(1.05)',
      opacity: 1,
      zIndex: 2,
    },
  }),
});

const getNavButtonStyles = (theme: Theme) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[2],
  display: { xs: 'none', sm: 'flex' },
  color: theme.palette.text.primary,
  '&:hover': { backgroundColor: theme.palette.grey[100] },
  '&.swiper-button-disabled': {
    color: theme.palette.action.disabled,
    cursor: 'default',
    boxShadow: theme.shadows[1],
  },
});

export const CardsCarousel = <T extends { id: string }>({
  cards,
  renderCard,
  centered = false,
}: CardsCarouselProps<T>) => {
  const theme = useTheme();
  const id = useId().replace(/:/g, '');

  const navClasses = useMemo(
    () => ({
      prev: `swiper-button-prev-${id}`,
      next: `swiper-button-next-${id}`,
      pagination: `swiper-pagination-${id}`,
    }),
    [id]
  );

  return (
    <Box sx={getCarouselStyles(theme, centered)}>
      <IconButton
        className={navClasses.prev}
        sx={[
          getNavButtonStyles(theme),
          {
            left: { xs: 0, sm: '8px', md: '8px' },
          },
        ]}
      >
        <Icon name="arrow-left" width={24} height={24} fill="currentColor" />
      </IconButton>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={centered ? 16 : 24}
        slidesPerView={centered ? 1.5 : 1.5}
        centeredSlides={centered}
        loop={centered}
        breakpoints={centered ? CENTERED_BREAKPOINTS : SWIPER_BREAKPOINTS}
        navigation={{
          prevEl: `.${navClasses.prev}`,
          nextEl: `.${navClasses.next}`,
        }}
        pagination={{
          el: `.${navClasses.pagination}`,
          clickable: true,
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>{renderCard(card)}</SwiperSlide>
        ))}
      </Swiper>

      <Box
        className={navClasses.pagination}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 2,
        }}
      />

      <IconButton
        className={navClasses.next}
        sx={[getNavButtonStyles(theme), { right: { xs: 0, sm: '8px', md: '8px' } }]}
      >
        <Icon name="arrow-right" width={24} height={24} fill="currentColor" />
      </IconButton>
    </Box>
  );
};
