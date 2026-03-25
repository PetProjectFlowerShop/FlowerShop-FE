import { Box, Button, useTheme, type Theme } from '@mui/material';
import baner from '../../assets/images/cta-back.png';

const getContainerStyles = (theme: Theme) => ({
  position: 'relative',
  width: '100%',
  height: {
    xs: 240,
    sm: 160,
  },
  overflow: 'hidden',
  borderRadius: '20px',
  mt: theme.spacing(theme.spacingTokens.micro),
});

const getImageStyles = () => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  top: 0,
  left: 0,
});

const getOverlayStyles = () => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const getButtonStyles = (theme: Theme) => ({
  position: 'relative',
  zIndex: 2,
  width: { xs: `calc(100% - ${theme.spacing(theme.spacingTokens.stackM)})`, sm: 400 },
  height: 60,
});

export const CatalogBanner = () => {
  const theme = useTheme();
  return (
    <Box sx={getContainerStyles(theme)}>
      <Box component="img" src={baner} alt="Flowers" sx={getImageStyles()} />
      <Box sx={getOverlayStyles()}>
        <Button variant="contained" color="primary" sx={getButtonStyles(theme)}>
          See more beautiful bouquets
        </Button>
      </Box>
    </Box>
  );
};
