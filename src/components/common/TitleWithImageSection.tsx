import { Box, Typography } from '@mui/material';
import { SectionContainer } from '../layouts/SectionContainer';
import type { CSSProperties } from 'react';
import { SocialLinks } from '../footer/SocialLinks';

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
  subMenu?: boolean;
  date?: string;
}

export default function TitleWithImageSection({
  title,
  imageSrc,
  imageAlt,
  imageObjectPosition,
  subMenu,
  date,
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
        {subMenu && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: { xs: 6, tablet: 2 },
              mt: 6,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body" sx={{ fontWeight: 600 }}>
                Published on:
              </Typography>
              <Typography variant="body" color={'text.secondary'}>
                {date}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Typography variant="body" sx={{ fontWeight: 600 }}>
                Share post:
              </Typography>
              <SocialLinks />
            </Box>
          </Box>
        )}
      </SectionContainer>
    </section>
  );
}
