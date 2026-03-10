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
import { type Theme } from '@mui/material/styles';

type Props = ContainerProps & {
  disableVerticalPadding?: boolean;
};

export function PageContainer({ children, disableVerticalPadding = false, sx, ...props }: Props) {
  return (
    <Container
      {...props}
      sx={[
        (theme: Theme) => ({
          ...(!disableVerticalPadding && {
            py: theme.spacing(theme.spacingTokens.stackM),
          }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Container>
  );
}
