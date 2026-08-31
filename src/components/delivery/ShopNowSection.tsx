import { Box, Button, Container, Typography } from '@mui/material';
import paymentBackground from '@/assets/images/payment/payment-background.webp';
import { Link } from 'react-router-dom';

export function ShopNowSection() {
  return (
    <Box
      data-testid="hero-section"
      component="section"
      sx={{
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${paymentBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 5, sm: 10 },
        minHeight: { xs: '356px', tablet: '344px' },
      }}
    >
      <Container sx={{ px: { desktop: 10 }, height: '100%' }}>
        <Box sx={{ maxWidth: { xs: '100%', desktop: '50%' }, marginLeft: { desktop: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              mb: { xs: 7, tablet: 10 },
            }}
          >
            Ready to share the joy?
          </Typography>

          <Box sx={{ maxWidth: { tablet: '640px', desktop: '635px' } }}>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 6, tablet: 9 },
              }}
            >
              If you prefer the comfort of delivery, simply click the button below to browse our
              collection and find your perfect bouquet.
            </Typography>

            <Button variant="contained" component={Link} to="/catalog" fullWidth>
              Shop now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
