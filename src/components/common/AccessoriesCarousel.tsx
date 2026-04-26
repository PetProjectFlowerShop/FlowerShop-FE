import { Box, IconButton, Stack } from '@mui/material';
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
}

export function AccessoriesCarousel({ accessories }: AccessoriesCarouselProps) {
  const id = useId().replace(/:/g, '');
  const prevClass = `acc-prev-${id}`;
  const nextClass = `acc-next-${id}`;
  const paginationClass = `acc-pagination-${id}`;

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mt: { sm: '-48px', md: '-56px' }, // Від'ємний відступ вгору (піджени під висоту свого SectionHeader)
          mb: 2,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Stack direction="row" spacing={1}>
          <IconButton className={prevClass} size="small" sx={{ backgroundColor: 'transparent' }}>
            <Icon name="navigate-before" width={20} height={20} fill="currentColor" />
          </IconButton>
          <IconButton className={nextClass} size="small" sx={{ backgroundColor: 'transparent' }}>
            <Icon name="navigate-next" width={20} height={20} fill="currentColor" />
          </IconButton>
        </Stack>
      </Box>

      <Box sx={{ position: 'relative', paddingBottom: '40px', mt: '40px' }}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            600: { slidesPerView: 2.2, spaceBetween: 20 },
            900: { slidesPerView: 3, spaceBetween: 24 },
            1200: { slidesPerView: 4, spaceBetween: 24 },
          }}
          navigation={{
            prevEl: `.${prevClass}`,
            nextEl: `.${nextClass}`,
          }}
          pagination={{
            el: `.${paginationClass}`,
            clickable: true,
          }}
        >
          {accessories.map((item) => (
            <SwiperSlide key={item.id}>
              <AccessoryCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

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
      </Box>
    </Box>
  );
}
