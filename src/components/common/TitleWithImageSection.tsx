import { Box, Typography } from '@mui/material';

const getContainerStyles = () => ({
  position: 'relative',
  width: '100%',
  maxWidth: {
    xs: '343px',
    tablet: '688px',
    desktop: '1296px',
  },
  height: {
    xs: '158.8px',
    tablet: '212.35px',
    desktop: '400px',
  },
  mx: 'auto',
  mt: 10,
  overflow: 'hidden',
  borderRadius: '20px',
});

const getImageStyles = () => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: '0 42%',
  top: 0,
  left: 0,
});

interface TitleWithImageSectionProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

export default function TitleWithImageSection({
  title,
  imageSrc,
  imageAlt,
}: TitleWithImageSectionProps) {
  return (
    <Box data-testid="title-image-header-section" sx={{ pt: 0, pb: 30 }}>
      <Typography variant="h2" sx={{ mb: 0, fontSize: '72px' }}>
        {title}
      </Typography>
      <Box sx={getContainerStyles()}>
        <Box component="img" src={imageSrc} alt={imageAlt} sx={getImageStyles()} />
      </Box>
    </Box>
  );
}
