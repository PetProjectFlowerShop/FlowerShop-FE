import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const buttonOverrides: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(2, 2.5),
      borderRadius: '24px',
      ...theme.typography.button,
      fontSize: theme.typography.pxToRem(20),
    }),
  },
};
