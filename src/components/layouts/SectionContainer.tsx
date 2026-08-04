import { Container } from '@mui/material';
import type { PropsWithChildren } from 'react';
type SectionContainerProps = PropsWithChildren;

export function SectionContainer({ children }: SectionContainerProps) {
  return (
    <Container
      disableGutters
      sx={{
        px: { xs: 4, tablet: 10, desktop: 18 },
      }}
    >
      {children}
    </Container>
  );
}
