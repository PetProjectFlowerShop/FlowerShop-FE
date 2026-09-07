import { Box, Button, Typography } from '@mui/material';
import promo from '@/assets/images/promo-background.webp';
import { Link } from 'react-router-dom';

export default function PromoSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundImage: `url(${promo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        px: { xs: 4, tablet: 10, desktop: 30 },
        py: { xs: 5, tablet: 10 },
      }}
      component="section"
      role="presentation"
    >
      <Box
        sx={{
          width: { xs: '244px', tablet: '460px', desktop: '600px' },

          ml: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: { xs: 2, tablet: 4 } }}>
          Get your Promo
        </Typography>
        <Typography variant="h3" sx={{ marginBottom: { xs: 4, tablet: 10 } }}>
          With the first order
        </Typography>
        <Typography letterSpacing={0} variant="body" sx={{ marginBottom: { xs: 6, tablet: 9 } }}>
          Enjoy a special welcome treat on your first order. Discover our hand-crafted bouquets and
          receive an exclusive offer designed to make your first moment with us even more memorable.
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/catalog">
          Go for the first order
        </Button>
      </Box>
    </Box>
  );
}
