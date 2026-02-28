import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const listItemButtonOverrides: Components<Theme>['MuiListItemButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '&.Mui-selected': {
        backgroundColor: theme.palette.action.selected,
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&.Mui-focusVisible': {
        backgroundColor: theme.palette.action.focus,
      },
      '&:active': {
        backgroundColor: theme.palette.action.active,
      },
    }),
  },
  defaultProps: {
    disableRipple: true,
  },
};
