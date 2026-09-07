import type { Theme } from '@mui/material';

export const typography = (theme: Theme) => ({
  fontFamily: '"Quicksand", "Arial", sans-serif',

  body: {
    fontFamily: '"Quicksand", sans-serif',
    letterSpacing: 0,
    fontSize: '16px',
    lineHeight: 1.5,
    [theme.breakpoints.up('tablet')]: {
      fontSize: '20px',
      lineHeight: 1.4,
    },
  },
  bodyFixed: {
    fontFamily: '"Quicksand", sans-serif',
    letterSpacing: 0,
    fontSize: '20px',
    lineHeight: 1.4,
  },

  h1: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 400,
    fontSize: '64px',
    letterSpacing: 0,
    lineHeight: 1.12,
    [theme.breakpoints.up('tablet')]: {
      fontSize: '96px',
      lineHeight: '1.08',
    },
  },
  h1Fixed: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 400,
    fontSize: '96px',
    lineHeight: '1.08',
    letterSpacing: 0,
  },

  h2: {
    fontFamily: '"Playfair Display", serif',
    letterSpacing: 0,
    fontSize: '40px',
    lineHeight: 1.2,
    [theme.breakpoints.up('tablet')]: {
      fontSize: '64px',
      lineHeight: 1.12,
    },
  },
  h2Fixed: {
    fontFamily: '"Playfair Display", serif',
    letterSpacing: 0,
    fontSize: '64px',
    lineHeight: 1.12,
  },

  h3: {
    fontFamily: '"Playfair Display", serif',
    letterSpacing: 0,
    fontSize: '28px',
    lineHeight: 1.28,
    [theme.breakpoints.up('tablet')]: {
      fontSize: '40px',
      lineHeight: 1.2,
    },
  },
  h3Fixed: {
    fontFamily: '"Playfair Display", serif',
    letterSpacing: 0,
    fontSize: '40px',
    lineHeight: 1.2,
  },

  h4: {
    fontFamily: '"Playfair Display", serif',
    letterSpacing: 0,
    fontSize: '20px',
    lineHeight: 1.4,
    [theme.breakpoints.up('tablet')]: {
      fontSize: '28px',
      lineHeight: 1.28,
    },
  },
  h4Fixed: {
    fontFamily: '"Playfair Display", serif',
    letterSpacing: 0,
    fontSize: '28px',
    lineHeight: 1.28,
  },
  button: {
    fontFamily: '"Quicksand", sans-serif',
    letterSpacing: 0,
    textTransform: 'none' as const,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.5,
    [theme.breakpoints.up('tablet')]: {
      fontSize: '20px',
      lineHeight: 1.4,
    },
  },

  caption: {
    fontFamily: '"Quicksand", sans-serif',
    letterSpacing: 0,
    fontSize: '14px',
    lineHeight: '20px',
    [theme.breakpoints.up('tablet')]: {
      fontSize: '16px',
      lineHeight: 1.5,
    },
  },

  captionFixed: {
    fontFamily: '"Quicksand", sans-serif',
    letterSpacing: 0,
    fontSize: '16px',
    lineHeight: 1.5,
  },

  caption2: {
    fontFamily: '"Quicksand", sans-serif',
    letterSpacing: 0,
    fontSize: '14px',
    lineHeight: 1.42,
  },
});
