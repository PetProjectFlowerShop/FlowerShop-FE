import { Box, IconButton, useTheme, type Theme } from '@mui/material';
import { useId, type ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from './Icon';

interface CardsCarouselProps<T extends { id: number }> {
  cards: T[];
  renderCard: (card: T) => ReactNode;
  centered?: boolean;
  cardsCount?: number;
  isReview?: boolean;
}

const SWIPER_BREAKPOINTS = {
  0: { slidesPerView: 2, spaceBetween: 16 },
  600: { slidesPerView: 2, spaceBetween: 24 },
  900: { slidesPerView: 3, spaceBetween: 24 },
  1200: { slidesPerView: 4, spaceBetween: 24 },
};

const CENTERED_BREAKPOINTS = {
  0: { slidesPerView: 1.25, spaceBetween: 16 },
  600: { slidesPerView: 2.5, spaceBetween: 16 },
  900: { slidesPerView: 3, spaceBetween: 16 },
};

const getCarouselStyles = (theme: Theme, centered?: boolean) => ({
  position: 'relative',
  paddingBottom: centered ? '60px' : '24px',
  paddingTop: centered ? '40px' : 0,

  '& .swiper': {
    paddingBottom: { xs: '12px', tablet: '20px' },
  },

  '& .swiper-wrapper': {
    alignItems: centered ? 'flex-start' : 'stretch',
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  '& .swiper-slide > *': {
    width: '100% !important',
    maxWidth: centered ? '416px' : '100%',
    flexGrow: 1,
  },

  '& .swiper-slide img, & .swiper-slide .MuiCardMedia-root': {
    height: centered ? '322px' : '100%',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '20px',
    marginTop: centered ? '45px' : '0px',
    transition: 'height 0.4s ease, margin-top 0.4s ease',
    marginBottom: theme.spacing(2),
  },

  ...(centered && {
    '& .swiper-slide-active': {
      zIndex: 2,
    },

    '& .swiper-slide-active img, & .swiper-slide-active .MuiCardMedia-root': {
      height: '422px',
      marginTop: '0px',
    },
  }),
});

const getNavButtonStyles = (
  theme: Theme,
  isLeft: boolean,
  centered: boolean,
  isReview?: boolean
) => {
  const isFourReviewCards = isReview && !centered;
  const topPosition = isFourReviewCards ? '260px' : { xs: '45%', tablet: '48%' };

  return {
    position: 'absolute',
    top: topPosition,
    transform: {
      xs: isLeft ? 'translate(-75%, -50%)' : 'translate(75%, -50%)',
      tablet: isLeft ? 'translate(-50%, -50%)' : 'translate(50%, -50%)',
    },
    zIndex: 10,
    width: '40px',
    height: '40px',
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[2],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.primary,
    '&:hover': { backgroundColor: theme.palette.grey[100] },
    '&.swiper-button-disabled': {
      color: theme.palette.action.disabled,
      cursor: 'default',
      boxShadow: theme.shadows[1],
    },
    '&.swiper-button-lock': {
      display: 'none',
    },
  };
};

export const CardsCarousel = <T extends { id: number }>({
  cards,
  renderCard,
  centered = false,
  isReview,
}: CardsCarouselProps<T>) => {
  const theme = useTheme();
  const id = useId().replace(/:/g, '');

  const navClasses = {
    prev: `swiper-button-prev-${id}`,
    next: `swiper-button-next-${id}`,
    pagination: `swiper-pagination-${id}`,
  };

  return (
    <Box sx={getCarouselStyles(theme, centered)}>
      <IconButton
        className={navClasses.prev}
        sx={[
          getNavButtonStyles(theme, true, centered, isReview),
          {
            left: { xs: '16px', sm: 0 },
          },
        ]}
      >
        <Icon name="arrow-left" width={24} height={24} fill="currentColor" />
      </IconButton>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={centered ? 24 : 24}
        slidesPerView={centered ? 1.5 : 1.5}
        centeredSlides={centered}
        centeredSlidesBounds={centered}
        loop={false}
        speed={400}
        watchSlidesProgress={true}
        breakpoints={centered ? CENTERED_BREAKPOINTS : SWIPER_BREAKPOINTS}
        navigation={{
          prevEl: `.${navClasses.prev}`,
          nextEl: `.${navClasses.next}`,
        }}
        pagination={{
          el: `.${navClasses.pagination}`,
          clickable: true,
        }}
        watchOverflow={true}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>{renderCard(card)}</SwiperSlide>
        ))}
      </Swiper>

      <Box
        className={navClasses.pagination}
        sx={{
          position: 'absolute',
          bottom: '10px',
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}
      />

      <IconButton
        className={navClasses.next}
        sx={[
          getNavButtonStyles(theme, false, centered, isReview),
          {
            right: centered ? { xs: '16px', sm: '8px' } : { xs: '16px', sm: 0 },
          },
        ]}
      >
        <Icon name="arrow-right" width={24} height={24} fill="currentColor" />
      </IconButton>
    </Box>
  );
};
