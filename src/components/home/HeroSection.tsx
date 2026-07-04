import { Box, Button, Container, Typography } from '@mui/material';
import banner from '@/assets/images/banner.webp';
import boquet from '@/assets/images/banner-decor.webp';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <Box
      data-testid="hero-section"
      component="section"
      sx={{
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 5, sm: 10 },
        height: { desktop: '840px' },
      }}
    >
      <Container sx={{ px: { desktop: 10 }, height: '100%' }}>
        <Box
          sx={{
            backdropFilter: 'blur(12px)',
            background: 'rgba(0,0,0,0.12)',
            borderRadius: 5,
            px: { xs: 3, tablet: 6, desktop: 8 },
            py: { xs: 10, desktop: 30 },
            color: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ maxWidth: '856px' }}>
            <Typography
              variant="h1"
              sx={{
                mb: { xs: 2, tablet: 6 },
                maxWidth: { xs: 'none', tablet: '200px', desktop: 'none' },
              }}
            >
              Charming blooms.
              <br />
              Special moments.
            </Typography>

            <Box sx={{ maxWidth: { tablet: '640px', desktop: '635px' } }}>
              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 6, tablet: 9 },
                  opacity: 0.9,
                }}
              >
                Each bouquet is thoughtfully crafted from fresh, hand-selected flowers to capture
                emotion, beauty, and meaning. Designed for life’s most special moments, our blooms
                bring warmth, elegance, and a touch of magic to every occasion.
              </Typography>

              <Button variant="contained" component={Link} to="/catalog" fullWidth>
                Go to catalog
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        component="img"
        src={boquet}
        alt="Bouquet decoration"
        sx={{
          display: { xs: 'none', tablet: 'block' },
          position: 'absolute',
          right: { xs: 0, desktop: '20px' },
          bottom: { tablet: '38%', desktop: '27%' },
          width: '300px',
          transform: { tablet: 'scale(1.05)', desktop: 'scale(1.8)' },
          transformOrigin: 'top right',
        }}
      />
    </Box>
  );
}
