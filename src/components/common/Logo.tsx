import { Box } from '@mui/material';

interface LogoProps {
  variant?: 'black' | 'white';
  width?: number | string;
}
export function Logo({ variant = 'black', width = 191 }: LogoProps) {
  const logoSrc =
    variant === 'black' ? '/images/logo-floria-black.svg' : '/images/logo-floria-white.svg';

  return (
    <Box
      component="img"
      src={logoSrc}
      alt="Floria Logo"
      sx={{
        width: width,
        height: 'auto',
      }}
    ></Box>
  );
}
