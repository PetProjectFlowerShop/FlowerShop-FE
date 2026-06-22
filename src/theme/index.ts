// Centralized MUI theme configuration.
// Theme options (palette, typography, etc.) are composed here to keep
// theming logic organized and easily extensible.

import { components } from './components';
import { createTheme, type Theme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { spacingTokens } from './spacing';

declare module '@mui/material/styles' {
  interface Theme {
    spacingTokens: typeof spacingTokens;
  }
  interface ThemeOptions {
    spacingTokens?: typeof spacingTokens;
  }
  interface BreakpointOverrides {
    tablet: true;
    desktop: true;
  }
}

let theme: Theme = createTheme({
  palette,
  components,
  spacing: 4,
  spacingTokens: spacingTokens,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      tablet: 768,
      md: 900,
      lg: 1200,
      desktop: 1440,
      xl: 1536,
    },
  },
});

theme = createTheme(theme, {
  typography: typography(theme),
});

export { theme };
