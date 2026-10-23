import type { Components, Theme } from '@mui/material/styles';

export const inputBaseOverrides: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    inputMultiline: {
      verticalAlign: 'top',
    },
  },
};
