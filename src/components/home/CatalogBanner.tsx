import { Box, Button } from '@mui/material';
import baner from '../../assets/images/cta-back.webp';

const getContainerStyles = () => ({
  position: 'relative',
  width: '100%',
  height: { xs: '160px', tablet: '240px' },
  overflow: 'hidden',
  borderRadius: '20px',
  mt: '28px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const getImageStyles = () => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  top: 0,
  left: 0,
});

export const CatalogBanner = () => {
  return (
    <Box sx={getContainerStyles()}>
      <Box component="img" src={baner} alt="Flowers" sx={getImageStyles()} />

      <Button variant="contained" color="primary" sx={{ maxWidth: 'fit-content' }}>
        See more beautiful bouquets
      </Button>
    </Box>
  );
};
