import { Box, Container, Typography, useTheme } from '@mui/material';
import whiteLogo from '@/assets/images/logo_large_white.svg';
import { ContactInfo } from './ContactInfo';
import FooterMenu from './FooterMenu';
import { LegalLink } from './LegalLink';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const theme = useTheme();
  return (
    <Box
      data-testid="footer"
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.dark,
        py: 15,
      }}
    >
      <Container
        maxWidth="desktop"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 15,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 9,
            justifyContent: { xs: 'center', sm: 'space-between' },
            alignItems: { xs: 'baseline', sm: 'flex-start' },
            mx: { xs: 'auto', sm: 'unset' },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Box component="img" sx={{ maxWidth: '182px', maxHeight: '60px' }} src={whiteLogo} />
            <SocialLinks />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'baseline' }}>
            <Typography variant="h4" color={theme.palette.primary.contrastText}>
              Explore
            </Typography>
            <FooterMenu />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'baseline' }}>
            <Typography variant="h4" color={theme.palette.primary.contrastText}>
              Store Info
            </Typography>
            <ContactInfo />
          </Box>
        </Box>
      </Container>
      <LegalLink />
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="caption" color="white" sx={{ opacity: 0.8 }}>
          © 2026 Floria. All rights reserved
        </Typography>
      </Box>
    </Box>
  );
}
