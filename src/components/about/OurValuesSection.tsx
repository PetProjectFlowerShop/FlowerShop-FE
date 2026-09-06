import { SectionContainer } from '../layouts/SectionContainer';
import { SectionHeader } from '../common/SectionHeader';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ValuesList } from '../home/AboutUsSection/ValuesList';
import values from './../../assets/images/aboutUs/about-us-values.webp';

export const OurValuesSection = () => {
  return (
    <section>
      <SectionContainer>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', desktop: '526px 1fr' },
            gap: { xs: 4, desktop: 6 },
            mb: { desktop: 10 },
            alignItems: 'stretch',
          }}
        >
          <Box
            sx={{
              order: { xs: 1, desktop: 2 },
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <SectionHeader title="Our flower values" />

            <Typography variant="body1" sx={{ mb: 2 }}>
              At FLORIA, we believe flowers are more than a gift — they are a way to express
              emotions, celebrate moments, and bring beauty into everyday life. Our philosophy is
              built on simplicity, freshness, and thoughtful design, where every bouquet is created
              with care and intention.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Our values:
            </Typography>
            <ValuesList />

            <Button
              variant="contained"
              sx={{ mt: { xs: 4, tablet: 6, desktop: 6 }, backgroundColor: 'secondary.main' }}
              fullWidth
              component={Link}
              to="/catalog"
            >
              Go to catalog
            </Button>
          </Box>
          <Box
            sx={{
              order: { xs: 2, desktop: 1 },
              height: '100%',
              mt: '8px',
            }}
          >
            <Box
              component="img"
              src={values}
              alt="Our flower values"
              sx={{
                display: 'block',
                width: '100%',
                height: { xs: '466px', tablet: '530px', desctop: '524px' },
                objectFit: 'cover',
                objectPosition: 'top center',
                borderRadius: 4,
              }}
            />
          </Box>
        </Box>
      </SectionContainer>
    </section>
  );
};
