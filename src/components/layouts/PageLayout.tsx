import { Stack, type StackProps } from '@mui/material';

type PageLayoutProps = StackProps;

export function PageLayout({ children, ...props }: PageLayoutProps) {
  return (
    <Stack
      spacing={{ xs: 16, tablet: 20, desktop: 30 }}
      marginBottom={{ xs: 16, tablet: 20, desktop: 30 }}
      {...props}
    >
      {children}
    </Stack>
  );
}
