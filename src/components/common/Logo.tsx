import { Box } from '@mui/material';
import { Icon } from './Icon';

interface LogoProps {
  variant?: 'black' | 'white';
  width?: number | string;
  height?: number | string;
}
export function Logo({ variant = 'black', width, height = 40 }: LogoProps) {
  const logoColor = variant === 'black' ? 'text.primary' : 'common.white';
  return (
    <Box
      sx={{
        width: width ?? {
          xs: '95px', // Для екранів від 0px
          sm: '122px', // Для екранів від 375px (твій sm)
        },
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
