import { Box } from '@mui/material';
import { Icon } from './Icon';

interface LogoProps {
  variant?: 'black' | 'white';
  width?: number | string;
  height?: number | string;
}
export function Logo({ variant = 'black', width = 122, height = 40 }: LogoProps) {
  const logoColor = variant === 'black' ? 'text.primary' : 'common.white';
  return (
    <Box
      sx={{
        width: width,
        height: height,
        display: 'inline-flex',
        color: logoColor,
      }}
    >
      <Icon
        name="logo"
        width="100%"
        height="auto"
        style={{ display: 'block', fill: 'currentColor', objectFit: 'contain' }}
      />
    </Box>
  );
}
