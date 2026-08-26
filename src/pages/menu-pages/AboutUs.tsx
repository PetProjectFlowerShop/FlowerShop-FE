import { Box, Button, Typography } from '@mui/material';
import { DynamicBreadcrumbs } from '@/components/common/DynamicBreadcrumbs';
import { SectionContainer } from '@/components/layouts/SectionContainer';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ValuesList } from '@/components/home/AboutUsSection/ValuesList';
import { Link } from 'react-router-dom';
import { AdvantageList } from '@/components/home/AboutUsSection/AdvantageList';
import values from './../../assets/images/about-us-values.webp';
import main from './../../assets/images/about-us-main.webp';
import TitleWithImageSection from '@/components/common/TitleWithImageSection';
import { QuestionsCallBlock } from '@/components/QuestionsCallBlock/QuestionsCallBlock';
import { PageLayout } from '@/components/layouts/PageLayout';
import shop_windows from './../../assets/images/about-us-shop1.webp';
import sales_floor from './../../assets/images/about-us-shop2.webp';

export function AboutUs() {
  return (
    <>
      <DynamicBreadcrumbs mb={{ xs: 2 }} />
      <PageLayout>
        <TitleWithImageSection title="About Us" imageSrc={main} imageAlt="shop" />

        <section>
          <SectionContainer>
            <Box display={{ desktop: 'flex' }} gap={{ desktop: '24px' }}>
              <Box width={{ desktop: '525px' }}>
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
              <Box display={{ desktop: 'grid' }} gap={{ desktop: '24px' }}>
                <Box
                  component="img"
                  src={shop_windows}
                  alt={'show_window'}
                  width={{ desktop: '417px' }}
                />
                <Box
                  component="img"
                  src={sales_floor}
                  alt={'sales_floor'}
                  width={{ desktop: '306px' }}
                />
              </Box>
            </Box>
          </SectionContainer>
        </section>

        {/* Images */}
        <section>
          <SectionContainer>
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
                    width: '526px',
                    minHeight: '100%',
                  }}
                />
              </Box>
              <Box sx={{ width: '100%' }}>
                <SectionHeader title="Our flower values" />

                <Typography variant="body1" sx={{ mb: 4 }}>
                  At FLORIA, we believe flowers are more than a gift — they are a way to express
                  emotions, celebrate moments, and bring beauty into everyday life. Our philosophy
                  is built on simplicity, freshness, and thoughtful design, where every bouquet is
                  created with care and intention.
                </Typography>
                {/* //todo values List */}
                <ValuesList />

                <Button
                  variant="contained"
                  sx={{ mt: { xs: 4, tablet: 6, desktop: 10 } }}
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
        <section>
          <SectionContainer>{/* progress */}</SectionContainer>
        </section>
        {/* Meet our team of flower experts */}
        <section>
          <SectionContainer>
            <SectionHeader
              title="Meet our team of flower experts"
              subtitle="Behind every Floria bouquet is a passionate team that loves flowers and cares about every detail. "
            />
          </SectionContainer>
        </section>
        <QuestionsCallBlock />
      </PageLayout>
    </>
  );
}
