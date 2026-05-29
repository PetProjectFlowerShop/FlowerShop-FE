import { useState, useRef } from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  if (!images || images.length === 0) return null;

  const thumbnails = images
    .map((img, index) => ({ img, originalIndex: index }))
    .filter((item) => item.originalIndex !== activeIndex);

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', tablet: 'row' }}
      gap={{ xs: 2, tablet: 2, desktop: 3 }}
      height="100%"
      sx={{
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
      }}
    >
      {/* 1. ЛІВА КОЛОНКА (МІНІАТЮРИ) */}
      <Box
        display={{ xs: 'none', tablet: 'flex' }}
        flexDirection="column"
        justifyContent="space-between"
        width={{ tablet: '120px', desktop: '160px' }}
        flexShrink={0}
      >
        {thumbnails.map((item) => (
          <Box
            key={item.originalIndex}
            component="img"
            src={item.img}
            alt={`Thumbnail ${item.originalIndex}`}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideToLoop(item.originalIndex);
              }
            }}
            sx={{
              width: '100%',
              aspectRatio: '1 / 1',
              objectFit: 'cover',
              borderRadius: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          />
        ))}
      </Box>

      {/* 2. ПРАВА КОЛОНКА (ВЕЛИКЕ ФОТО У SWIPER) */}
      <Box
        flex={1}
        sx={{
          minWidth: 0,
          height: { xs: '350px', tablet: '450px', desktop: '550px' },
          borderRadius: '16px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Swiper
          modules={[Pagination]}
          loop={true}
          spaceBetween={16}
          pagination={{ clickable: true }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx} style={{ width: '100%', height: '100%' }}>
              <Box
                component="img"
                src={img}
                alt={`Main product ${idx}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '16px',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
