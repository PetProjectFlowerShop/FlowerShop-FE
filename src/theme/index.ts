// Centralized MUI theme configuration.
// Theme options (palette, typography, etc.) are composed here to keep
// theming logic organized and easily extensible.

import { components } from './components/index';
import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';

export const theme = createTheme({
  palette,
  typography,
  components,
});
