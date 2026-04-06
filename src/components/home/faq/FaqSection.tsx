import { Box, Stack, Typography } from '@mui/material';
import faq from '../../../assets/images/faq-banner.jpg';
import { CustomSection } from '../../common/CustomSection';
import { Container } from '@mui/material';
import { theme } from '../../../theme';
import { FaqList } from './FaqList';

export default function FaqSection() {
  return (
    <CustomSection>
      <Container>
        <Stack spacing={theme.spacingTokens.contentGapDesktop}>
          <Stack spacing={theme.spacingTokens.stackXs}>
            <Typography variant="h2" sx={{ color: 'text.primary' }}>
              FAQ
            </Typography>
            <Typography variant="h4" sx={{ color: 'text.secondary' }}>
              Have Any Questions?
            </Typography>
          </Stack>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              gap: theme.spacingTokens.stackM,
              alignItems: 'flex-start',
              flexDirection: { xs: 'column', lg: 'row' },
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                position: { xs: 'static', lg: 'sticky' },
                alignSelf: 'flex-start',
                top: 0,
                gap: theme.spacingTokens.stackXs,
                flexDirection: { xs: 'column', md: 'row', lg: 'column' },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  flex: 1,
                  color: 'text.primary',
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacingTokens.stackXs,
                  order: { xs: 1, md: 2, lg: 1 },
                }}
              >
                Here you’ll find answers to the most common inquiries about our bouquets, delivery
                options, and care tips. If you don’t see what you’re looking for, our friendly team
                is always ready to help.
              </Typography>
              <Box
                sx={{
                  backgroundImage: `url(${faq})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  maxHeight: '636px',
                  aspectRatio: '4 / 2.5',
                  maxWidth: '636px',
                  width: '100%',
                  flex: 1,
                  borderRadius: '16px',
                  display: { xs: 'none', md: 'block' },
                  order: { xs: 2, md: 1 },
                }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <FaqList />
            </Box>
          </Box>
        </Stack>
      </Container>
    </CustomSection>
  );
}
