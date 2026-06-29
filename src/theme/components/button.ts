import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const buttonOverrides: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(4, 5),
      borderRadius: 20,
      ...theme.typography.button,
    }),
    textPrimary: () => ({
      padding: '4px 8px',
    }),
  },
};
