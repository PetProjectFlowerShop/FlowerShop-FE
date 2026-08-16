import { Container, type ContainerProps } from '@mui/material';
type SectionContainerProps = ContainerProps;

export function SectionContainer({ children, ...props }: SectionContainerProps) {
  return (
    <Container
      disableGutters
      sx={{
        px: { xs: 4, tablet: 10, desktop: 18 },
      }}
      {...props}
    >
      {children}
    </Container>
  );
}
