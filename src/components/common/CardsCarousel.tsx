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
}

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
  },
  '& .swiper-slide > *': {
    width: '100%',
  },
});

const getNavButtonStyles = (theme: Theme) => ({
  position: 'absolute',
  top: `calc(50% - ${theme.spacing(theme.spacingTokens.stackM)})`,
  transform: 'translateY(-50%)',
  zIndex: 10,
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[2],
  display: { xs: 'none', md: 'flex' },
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
    <Box sx={getCarouselStyles(theme)}>
      <IconButton
        className={navClasses.prev}
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
        breakpoints={SWIPER_BREAKPOINTS}
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
        }}
      />

      <IconButton
        className={navClasses.next}
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
