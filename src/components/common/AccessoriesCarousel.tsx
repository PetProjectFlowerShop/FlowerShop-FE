import { Box, IconButton, Stack, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useId } from 'react';
import { AccessoryCard, type Accessory } from './AccessoryCard';
import { Icon } from '../common/Icon';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface AccessoriesCarouselProps {
  accessories: Accessory[];
  slidesPerView?: number | 'auto';
  showPagination?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  breakpoints?: Record<number, any>;
  title?: boolean;
}

const DEFAULT_BREAKPOINTS = {
  0: { slidesPerView: 1, spaceBetween: 16 },
  600: { slidesPerView: 2.2, spaceBetween: 20 },
  900: { slidesPerView: 3, spaceBetween: 24 },
  1200: { slidesPerView: 4, spaceBetween: 24 },
};

export function AccessoriesCarousel({
  accessories,
  slidesPerView = 2,
  showPagination = false,
  breakpoints = DEFAULT_BREAKPOINTS,
  title = false,
}: AccessoriesCarouselProps) {
  const id = useId().replace(/:/g, '');
  const prevClass = `acc-prev-${id}`;
  const nextClass = `acc-next-${id}`;
  const paginationClass = `acc-pagination-${id}`;

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        {title ? (
          <Box>
            <Typography variant={'body1'} color="text.primary">
              Add Accessories
            </Typography>
          </Box>
        ) : (
          <Box>
            <Typography variant={'h4'} color="text.primary">
              Add Accessories
            </Typography>
          </Box>
        )}
        <Stack direction="row" spacing={1}>
          <IconButton className={prevClass} size="small" sx={{ backgroundColor: 'transparent' }}>
            <Icon name="navigate-before" width={20} height={20} fill="currentColor" />
          </IconButton>
          <IconButton className={nextClass} size="small" sx={{ backgroundColor: 'transparent' }}>
            <Icon name="navigate-next" width={20} height={20} fill="currentColor" />
          </IconButton>
        </Stack>
      </Box>

      <Box
        sx={{
          position: 'relative',
          paddingBottom: showPagination ? '40px' : 0,
          mt: '40px',
        }}
      >
        <Swiper
          modules={showPagination ? [Navigation, Pagination] : [Navigation]}
          slidesPerView={slidesPerView}
          breakpoints={breakpoints}
          navigation={{
            prevEl: `.${prevClass}`,
            nextEl: `.${nextClass}`,
          }}
          pagination={
            showPagination
              ? {
                  el: `.${paginationClass}`,
                  clickable: true,
                }
              : false
          }
        >
          {accessories.map((item) => (
            <SwiperSlide key={item.id}>
              <AccessoryCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {showPagination && (
          <Box
            className={paginationClass}
            sx={{
              position: 'absolute',
              bottom: '0px',
              left: 0,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10,
              '& .swiper-pagination-bullet': {
                width: '8px',
                height: '8px',
                backgroundColor: 'action.disabled',
                opacity: 1,
                margin: '0 4px !important',
                transition: 'all 0.3s ease',
              },
              '& .swiper-pagination-bullet-active': {
                backgroundColor: 'secondary.main',
              },
            }}
          />
        )}
      </Box>
    </Box>
  );
}
