import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const paperOverrides: Components<Theme>['MuiPaper'] = {
  defaultProps: {
    elevation: 1,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: '4px',
      backgroundColor: theme.palette.background.paper,
      backgroundImage: 'none',
    }),
    rounded: {
      borderRadius: '16px',
    },
    outlined: ({ theme }) => ({
      borderColor: theme.palette.divider,
    }),
  },
};
