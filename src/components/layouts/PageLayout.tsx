import { Stack } from '@mui/material';
import type { ReactNode } from 'react';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Stack
      spacing={{ xs: 16, tablet: 20, desktop: 30 }}
      marginBottom={{ xs: 16, tablet: 20, desktop: 30 }}
    >
      {children}
    </Stack>
  );
}
