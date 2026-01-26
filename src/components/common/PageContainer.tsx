/**
 * PageContainer is a page-level wrapper for page content.
 *
 * It should be used inside page components (pages), NOT inside layouts.
 * It is responsible for:
 *  - content max width
 *  - vertical spacing (padding)
 *  - semantic <main> element
 *
 * How to control width:
 *  - default: maxWidth="lg" (standard pages)
 *  - maxWidth="sm" — auth pages (login, register)
 *  - maxWidth="md" — content-heavy pages
 *  - maxWidth="xl" — wide layouts
 *  - maxWidth={false} — full-width pages (no width limit)
 *
 * Full-width pages may skip PageContainer entirely.
 */

import { Container, type ContainerProps } from '@mui/material';

type Props = ContainerProps & {
  asMain?: boolean;
};

export function PageContainer({ children, asMain = true, ...props }: Props) {
  return (
    <Container
      component={asMain ? 'main' : 'div'}
      maxWidth="lg"
      sx={{
        py: { xs: 2, sm: 3, md: 4 },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
}
