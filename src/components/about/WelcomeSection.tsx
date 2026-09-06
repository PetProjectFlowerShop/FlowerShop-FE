import { SectionContainer } from '../layouts/SectionContainer';
import { SectionHeader } from '../common/SectionHeader';
import { Box, Typography } from '@mui/material';
import shop_windows from './../../assets/images/aboutUs/about-us-shop1.webp';
import sales_floor from './../../assets/images/aboutUs/about-us-shop2.webp';

export const WelcomeSection = () => {
  return (
    <section>
      <SectionContainer>
        <Box
          display={{ desktop: 'flex' }}
          gap={{ desktop: '24px' }}
          alignItems={{ tablet: 'flex-start' }}
        >
          <Box width={{ desktop: '525px' }}>
            <SectionHeader title="Welcome to the home of beauty" mb={10} />

            <Typography variant="body1" sx={{ mb: 6 }}>
              FLORIA was born from a simple idea to turn flowers into meaningful moments. What
              started as a love for natural beauty and thoughtful details has grown into a place
              where every bouquet tells a story.
            </Typography>
            <Typography variant="body1">
              We believe flowers are more than a gift. They are emotions, memories, and quiet
              messages that don’t need words. That’s why each arrangement at FLORIA is created with
              intention, care, and a respect for nature.
            </Typography>
          </Box>
          <Box
            display={{ xs: 'grid', tablet: 'flex' }}
            gap={{ xs: '16px', desktop: '24px' }}
            alignItems={{ tablet: 'flex-start' }}
            sx={{ mt: { xs: '28px', tablet: '24px', desktop: 0 } }}
          >
            <Box
              component="img"
              src={shop_windows}
              alt={'show_window'}
              width={{ xs: '343px', tablet: '429px', desktop: '417px' }}
              sx={{ mt: { tablet: '112px' } }}
            />
            <Box
              component="img"
              src={sales_floor}
              alt={'sales_floor'}
              width={{ xs: '343px', tablet: '243px', desktop: '306px' }}
            />
          </Box>
        </Box>
      </SectionContainer>
    </section>
  );
};
