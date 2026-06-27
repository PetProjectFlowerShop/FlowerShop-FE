import banner from '@/assets/images/AboutUsBanner.webp';
import { SectionHeader } from '@/components/common/SectionHeader';
import { SectionContainer } from '@/components/layouts/SectionContainer';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { AdvantageList } from './AdvantageList';
import { ValuesList } from './ValuesList';

export default function AboutUsSection() {
  return (
    <section>
      <SectionContainer>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', desktop: '1fr 1fr' },
            gap: 6,
            mb: { desktop: 10 },
            alignItems: 'stretch',
          }}
        >
          <Box
            sx={{
              height: '100%',
              overflow: 'hidden',
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', desktop: 'block' },
                borderRadius: 2,
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100%',
              }}
            />
          </Box>
          <Box>
            <SectionHeader title="About us" />

            <Typography variant="h4" sx={{ mt: 3, mb: 2 }}>
              Our Philosophy
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              At Floria, we believe that flowers are more than just decoration—they are a way to
              express emotions, celebrate moments, and bring joy to everyday life. Each bouquet we
              craft is a blend of creativity, passion, and care, designed to make every occasion
              unforgettable.
            </Typography>

            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                Our Values
              </Typography>
              <ValuesList />
            </Box>

            <Button
              variant="contained"
              sx={{ mb: { xs: 4, tablet: 6, desktop: 0 } }}
              fullWidth
              component={Link}
              to="/about-us"
            >
              Read more about us
            </Button>
          </Box>
        </Box>

        <Box
          component="img"
          src={banner}
          alt="Banner decoration"
          sx={{
            maxHeight: { xs: 434, tablet: 480 },
            borderRadius: 5,
            mb: 7,
            width: '100%',
            objectFit: 'cover',
            display: { desktop: 'none' },
          }}
          loading="lazy"
        />

        <AdvantageList />
      </SectionContainer>
    </section>
  );
}
