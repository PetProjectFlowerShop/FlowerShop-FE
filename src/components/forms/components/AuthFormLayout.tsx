import { Stack, type StackProps } from '@mui/material';
import type { ReactNode } from 'react';

type AuthFormLayoutProps = {
  children: ReactNode;
} & StackProps;

export function AuthFormLayout({ children, ...props }: AuthFormLayoutProps) {
  return (
    <Stack
      spacing={{
        xs: 3,
        sm: 6,
      }}
      {...props}
    >
      {children}
    </Stack>
  );
}
