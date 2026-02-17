// Centralized MUI theme configuration.
// Theme options (palette, typography, etc.) are composed here to keep
// theming logic organized and easily extensible.

import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';

export const theme = createTheme({
  palette,
  typography,
  components,
});
