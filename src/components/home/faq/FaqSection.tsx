import faq from '@/assets/images/faq-banner.jpg';
import { SectionContainer } from '@/components/layouts/SectionContainer';
import { theme } from '@/theme';
import { Box, Stack, Typography } from '@mui/material';
import { FaqList } from './FaqList';

export default function FaqSection() {
  return (
    <section>
      <SectionContainer>
        <Stack spacing={{ xs: 7, tablet: 9, desktop: 10 }}>
          <Stack spacing={theme.spacingTokens.stackXs}>
            <Typography variant="h2" sx={{ color: 'text.primary' }}>
              FAQ
            </Typography>
            <Typography variant="h4" sx={{ color: 'text.secondary' }}>
              Have Any Questions?
            </Typography>
          </Stack>

          <Stack
            spacing={{ xs: 6, desktop: 0 }}
            sx={{
              display: {
                xs: 'flex',
                desktop: 'grid',
              },

              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: { desktop: 6 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'stretch',
                flexDirection: { xs: 'row', desktop: 'column-reverse' },
                gap: 4,
                justifyContent: 'start',
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  backgroundImage: `url(${faq})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '16px',
                  display: { xs: 'none', tablet: 'block' },
                  width: { desktop: '100%' },
                  maxHeight: '404px',
                }}
              />
              <Typography
                variant="body"
                sx={{
                  flex: { xs: 1, desktop: 0 },
                  color: 'text.primary',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Here you’ll find answers to the most common inquiries about our bouquets, delivery
                options, and care tips. If you don’t see what you’re looking for, our friendly team
                is always ready to help.
              </Typography>
            </Box>

            <FaqList />
          </Stack>
        </Stack>
      </SectionContainer>
    </section>
  );
}
