import { Box } from '@mui/material';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';

export function ProfileNavigation() {
  return (
    <>
      <Box
        sx={{
          display: {
            xs: 'none',
            desktop: 'block',
          },
        }}
      >
        <DesktopNavigation />
      </Box>

      <Box
        sx={{
          display: {
            xs: 'block',
            desktop: 'none',
          },
        }}
        mb={{
          xs: 7,
          tablet: 6,
        }}
      >
        <MobileNavigation />
      </Box>
    </>
  );
}
