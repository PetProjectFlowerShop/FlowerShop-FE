import { Box, Button, Container, Typography } from '@mui/material';
import banner from '../../assets/images/banner.png';
import boquet from '../../assets/images/banner-decor.png';

export default function HeroSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 5, md: 10 },
        height: { lg: '75vh' },
      }}
    >
      <Container sx={{ px: { lg: 10 }, height: '100%' }}>
        <Box
          sx={{
            backdropFilter: 'blur(12px)',
            background: 'rgba(0,0,0,0.12)',
            borderRadius: 5,
            px: { xs: 3, md: 8 },
            py: 10,
            color: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ maxWidth: '856px' }}>
            <Typography
              variant="h1"
              sx={{
                mb: { xs: 2, md: 6 },
                maxWidth: { xs: 'none', md: '200px', lg: 'none' },
              }}
            >
              Charming blooms.
              <br />
              Special moments.
            </Typography>

            <Box sx={{ maxWidth: { lg: '635px' } }}>
              <Typography
                variant="body1"
                sx={{
                  mb: 6,
                  opacity: 0.9,
                }}
              >
                Each bouquet is thoughtfully crafted from fresh, hand-selected flowers to capture
                emotion, beauty, and meaning. Designed for life’s most special moments.
              </Typography>

              {/* TODO: update button after fix */}
              <Button
                variant="contained"
                sx={{
                  px: 5,
                  py: 4,
                  borderRadius: 10,
                  width: '100%',

                  backgroundColor: '#8B9A5B',
                  '&:hover': {
                    backgroundColor: '#7C8C4F',
                  },
                }}
              >
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
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          right: { xs: 0, lg: '20px' },
          top: { md: '80px', lg: '222px' },
          transform: { md: 'scale(1.2)', lg: 'scale(1.8)' },
          transformOrigin: 'top right',
        }}
      />
    </Box>
  );
}
