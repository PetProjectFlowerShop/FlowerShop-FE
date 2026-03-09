import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const dividerOverrides: Components<Theme>['MuiDivider'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderColor: theme.palette.divider,
      borderBottomWidth: '1px',
      opacity: 1,
    }),
  },
};
