import { type Components, type Theme } from '@mui/material/styles';

export const cardOverrides: Components<Theme>['MuiCard'] = {
  styleOverrides: {
    root: {
      borderRadius: '16px',
      boxShadow: 'none',
    },
  },
};
