import type { PaletteOptions } from '@mui/material';

export const palette: PaletteOptions = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.60)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  primary: {
    main: '#849159',
    dark: '#505933',
    light: '#EFF0EE',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#AB656B',
    dark: '#784248',
    light: '#F5EDED',
    contrastText: '#FFFFFF',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.85)',
    hover: 'rgba(0, 0, 0, 0.10)',
    focus: 'rgba(0, 0, 0, 0.15)',
    selected: 'rgba(0, 0, 0, 0.30)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  },
  error: {
    main: '#D32F2F',
  },
  success: {
    main: '#388E3C',
  },
  background: {
    default: '#F9F9F9',
    paper: '#FFFFFF',
  },
  divider: 'rgba(0, 0, 0, 0.35)',
};
