import type { Components } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

export const paginationOverrides: Components<Theme>['MuiPaginationItem'] = {
  styleOverrides: {
    root: {
      borderRadius: '12px',
    },
  },
};
