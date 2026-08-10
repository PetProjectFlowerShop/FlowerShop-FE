import { Box, CardMedia } from '@mui/material';
import type { ReactNode } from 'react';

type ProductCardImageProps = {
  imageUrl: string;
  alt: string;
  overlay?: ReactNode;
};

const getImageContainerStyles = {
  position: 'relative',
  width: '100%',
  height: { xs: '248px', tablet: '400px' },
  aspectRatio: '1',
  borderRadius: '16px',
};
const imageStyles = {
  objectFit: 'cover',
  height: '100%',
  width: '100%',
  transition: 'transform 0.5s ease',
};

export const ProductImageArea = ({ imageUrl, alt, overlay }: ProductCardImageProps) => {
  return (
    <Box sx={getImageContainerStyles}>
      <CardMedia component="img" image={imageUrl} alt={alt} sx={imageStyles} />
      {overlay}
    </Box>
  );
};
