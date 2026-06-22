import { Container } from '@mui/material';
import type { PropsWithChildren } from 'react';

type SectionContainerProps = PropsWithChildren;

export function SectionContainer({ children }: SectionContainerProps) {
  return (
    <Container
      disableGutters
      sx={{
        px: { xs: '16px', tablet: '40px', desktop: '72px' },
      }}
    >
      {children}
    </Container>
  );
}
