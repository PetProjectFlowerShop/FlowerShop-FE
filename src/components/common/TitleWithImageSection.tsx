import { Box, Typography } from '@mui/material';

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

const getImageStyles = () => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: '0 42%',
  inset: 0,
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
    <Box
      data-testid="title-image-header-section"
      sx={{ pt: 0, pb: { xs: 16, tablet: 20, desktop: 30 } }}
    >
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Box sx={getContainerStyles()}>
        <Box component="img" src={imageSrc} alt={imageAlt} sx={getImageStyles()} />
      </Box>
    </Box>
  );
}
