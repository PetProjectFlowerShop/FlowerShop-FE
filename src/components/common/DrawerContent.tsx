import { Box, type BoxProps } from '@mui/material';
import type { ReactNode } from 'react';

type DrawerContentProps = {
  children: ReactNode;
} & BoxProps;

export function DrawerContent({ children, sx, ...props }: DrawerContentProps) {
  return (
    <Box
      sx={[
        {
          pt: 14,
          pb: 20,
          px: {
            xs: 4,
            sm: 10,
            lg: 18,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </Box>
  );
}
