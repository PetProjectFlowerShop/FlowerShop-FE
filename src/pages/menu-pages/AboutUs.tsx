import { Box, Button, Typography } from '@mui/material';
import { PageContainer } from '@/components/common/PageContainer';
import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';
import { SectionContainer } from '@/components/layouts/SectionContainer';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ValuesList } from '@/components/home/AboutUsSection/ValuesList';
import { Link } from 'react-router-dom';
import { AdvantageList } from '@/components/home/AboutUsSection/AdvantageList';
import values from './../../assets/images/about-us-values.webp';
import main from './../../assets/images/about-us-main.webp';

export function AboutUs() {
  return (
    <>
      <DynamicBreadcrumbs />
      <PageContainer>
        <section>
          <SectionContainer>
            <SectionHeader title="About Us" />
            <Box
              data-testid="about-us-main-section"
              component="section"
              sx={{
                // display: 'flex',
                // position: 'relative',
                borderRadius: '12px',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${main})`,
                // backgroundSize: 'contain',
                // backgroundPosition: 'center',
                // py: { xs: 5, sm: 10 },
                height: { xs: '158px', table: '212px', desktop: '400px' },
              }}
            />
          </SectionContainer>
        </section>

        <section>
          <SectionContainer>
            {/* Welcome to the home of beauty */}
            <Box>
              <SectionHeader title="Welcome to the home of beauty" />

              <Typography variant="body1" sx={{ mb: 4 }}>
                FLORIA was born from a simple idea to turn flowers into meaningful moments. What
                started as a love for natural beauty and thoughtful details has grown into a place
                where every bouquet tells a story.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                We believe flowers are more than a gift. They are emotions, memories, and quiet
                messages that don’t need words. That’s why each arrangement at FLORIA is created
                with intention, care, and a respect for nature.
              </Typography>
            </Box>
            <AdvantageList />
          </SectionContainer>
        </section>

        {/* Our flower values */}
        <section>
          <SectionContainer>
            <Box
              sx={{
                display: { desktop: 'grid' },
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
                    backgroundImage: `url(${values})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100%',
                  }}
                />
              </Box>
              <Box>
                <SectionHeader title="Our flower values" />

                <Typography variant="body1" sx={{ mb: 4 }}>
                  At FLORIA, we believe flowers are more than a gift — they are a way to express
                  emotions, celebrate moments, and bring beauty into everyday life. Our philosophy
                  is built on simplicity, freshness, and thoughtful design, where every bouquet is
                  created with care and intention.
                </Typography>

                <Box sx={{ mb: 6 }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>
                    Our values:
                  </Typography>
                  <Typography>
                    Quality & Freshness - we carefully select only fresh flowers to ensure
                    long-lasting beauty. Creative Design - each arrangement is thoughtfully crafted,
                    inspired by nature. Customer Care - we offer warm experience from the first
                    click to delivery.
                  </Typography>
                  {/* //todo values List */}
                  <ValuesList />
                </Box>

                <Button
                  variant="contained"
                  sx={{ mb: { xs: 4, tablet: 6, desktop: 0 } }}
                  fullWidth
                  component={Link}
                  to="/catalog"
                >
                  Go to catalog
                </Button>
              </Box>
            </Box>
          </SectionContainer>
        </section>
        {/* progress */}
        {/* Meet our team of flower experts */}
        {/* Have any questions? */}
      </PageContainer>
    </>
  );
}
