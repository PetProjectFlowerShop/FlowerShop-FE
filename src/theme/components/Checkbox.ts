import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const checkboxOverrides: Components<Theme>['MuiCheckbox'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: '9px',
      width: 42,
      height: 42,
      borderRadius: '100px',
      color: theme.palette.text.secondary,
      transition: theme.transitions.create(['background-color', 'color']),

      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },

      '&:active': {
        backgroundColor: theme.palette.action.active,
      },

      '&.Mui-checked': {
        color: theme.palette.primary.main,

        '&.Mui-disabled': {
          color: theme.palette.action.disabled,
        },
      },

      '&.Mui-disabled': {
        color: theme.palette.action.disabled,
      },

      '&.Mui-error': {
        color: theme.palette.error.main,
      },
    }),
  },
};
