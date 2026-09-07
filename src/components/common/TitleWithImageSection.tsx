import { Box, Typography } from '@mui/material';
import { SectionContainer } from '../layouts/SectionContainer';
import type { CSSProperties } from 'react';

const getContainerStyles = () => ({
  position: 'relative',
  width: '100%',
  aspectRatio: {
    xs: '343 / 159',
    tablet: '688 / 212',
    desktop: '1296 / 400',
  },

  mt: { xs: 7, tablet: 10 },
  overflow: 'hidden',
  borderRadius: '20px',
});

const getImageStyles = (objectPosition: CSSProperties['objectPosition'] = '0 42%') => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition,
  inset: 0,
});

interface TitleWithImageSectionProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageObjectPosition?: CSSProperties['objectPosition'];
}

export default function TitleWithImageSection({
  title,
  imageSrc,
  imageAlt,
  imageObjectPosition,
}: TitleWithImageSectionProps) {
  return (
    <section>
      <SectionContainer>
        <Box data-testid="title-image-header-section" sx={{ pt: 0 }}>
          <Typography variant="h2" component="h1">
            {title}
          </Typography>
          <Box sx={getContainerStyles()}>
            <Box
              component="img"
              src={imageSrc}
              alt={imageAlt}
              sx={getImageStyles(imageObjectPosition)}
            />
          </Box>
        </Box>
      </SectionContainer>
    </section>
  );
}
