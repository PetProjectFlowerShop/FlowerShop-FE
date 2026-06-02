import { useState, useRef, useMemo } from 'react';
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

  const thumbnails = useMemo(() => {
    if (!images || images.length === 0) return [];
    return images.slice(0, 3).map((img, index) => ({ img, originalIndex: index }));
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', tablet: 'row' }}
      gap={{ xs: 2, tablet: 2, desktop: 3 }}
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
        width={{ tablet: '160px', desktop: '196px' }}
        gap={{ tablet: '4px', desktop: '24px' }}
        flexShrink={0}
        sx={{
          maxHeight: { tablet: '420px', desktop: '550px' },
          overflowY: 'auto',
          '::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {thumbnails.map((item) => {
          const isActive = item.originalIndex === activeIndex;

          return (
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
                height: { tablet: '137px', desktop: '167px' },
                flexShrink: 0,
                objectFit: 'cover',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                opacity: isActive ? 1 : 0.5,
                border: isActive ? '2px solid #E5E7EB' : '2px solid transparent',

                '&:hover': {
                  opacity: 1,
                },
              }}
            />
          );
        })}
      </Box>

      {/* 2. ПРАВА КОЛОНКА (ВЕЛИКЕ ФОТО У SWIPER) */}
      <Box
        flex={1}
        sx={{
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
