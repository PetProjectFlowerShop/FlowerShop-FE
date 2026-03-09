import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const radioOverrides: Components<Theme>['MuiRadio'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: '9px',
      width: 42,
      height: 42,
      color: theme.palette.text.secondary,
      transition: theme.transitions.create(['background-color', 'color'], {
        duration: theme.transitions.duration.short,
      }),

      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },

      '&:active': {
        backgroundColor: theme.palette.action.active,
      },

      '&.Mui-checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:active': {
          backgroundColor: theme.palette.action.active,
        },
      },

      '&.Mui-disabled': {
        color: theme.palette.action.disabled,
        '&.Mui-checked': {
          color: theme.palette.action.disabled,
        },
      },
    }),
  },
};
