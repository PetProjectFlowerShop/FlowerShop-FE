import { Box, Button, Container, Typography } from '@mui/material';
import { CustomSection } from '../../common/CustomSection';
import { SectionHeader } from '../../common/SectionHeader';
import { ValuesList } from './ValuesList';
import banner from '../../../assets/images/AboutUsBanner.webp';
import { AdvantageList } from './AdvantageList';
import { Link } from 'react-router-dom';

export default function AboutUsSection() {
  return (
    <CustomSection data-testid="about-us-section">
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', desktop: '1fr 1fr' },
            gap: 6,
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          <Box
            component="img"
            src={banner}
            alt="Banner decoration"
            sx={{
              borderRadius: 2,
              height: 'auto',
              maxHeight: '660px',
              width: '100%',
              objectFit: 'cover',
              display: { xs: 'none', desktop: 'block' },
            }}
            loading="lazy"
          />
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

            <Button variant="contained" sx={{ mb: 4 }} component={Link} to="/about-us">
              Read more about us
            </Button>
          </Box>
        </Box>

        <Box
          component="img"
          src={banner}
          alt="Banner decoration"
          sx={{
            maxHeight: 434,
            borderRadius: 2,
            mb: 7,
            width: '100%',
            objectFit: 'cover',
            display: { desktop: 'none' },
          }}
          loading="lazy"
        />

        <AdvantageList />
      </Container>
    </CustomSection>
  );
}
