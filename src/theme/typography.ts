// MUI v6 does not expose `TypographyOptions` as a public type.
// We rely on `createTheme` to infer the typography configuration.

import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();
export const typography = {
  fontFamily: '"Quicksand", "Arial", sans-serif',

  h1: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 400,
    fontSize: '64px',
    lineHeight: 1.12,
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: '96px',
      lineHeight: '1.08',
    },
  },
  h2: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '40px',
    lineHeight: 1.2,
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: '64px',
      lineHeight: 1.12,
    },
  },
  h3: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '28px',
    lineHeight: 1.28,
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: '40px',
      lineHeight: 1.2,
    },
  },
  h4: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '20px',
    lineHeight: 1.4,
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: '28px',
      lineHeight: 1.28,
    },
  },
  button: {
    fontFamily: '"Quicksand", sans-serif',
    textTransform: 'none' as const,
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: 1.4,
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: '20px',
    },
  },
  body: {
    fontSize: '16px',
    lineHeight: 1.5,
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: '20px',
      lineHeight: 1.4,
    },
  },
  caption: {
    fontSize: '14px',
    lineHeight: 1.42,
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: '16px',
      lineHeight: 1.5,
    },
  },
};
