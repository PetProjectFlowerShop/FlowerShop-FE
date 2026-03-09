import { alpha, type Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const switchOverrides: Components<Theme>['MuiSwitch'] = {
  styleOverrides: {
    root: {
      width: 58,
      height: 38,
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    switchBase: ({ theme }) => ({
      padding: 9,
      transitionDuration: '300ms',

      '& .MuiSwitch-thumb': {
        color: theme.palette.primary.contrastText,
      },
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.secondary.main,
        opacity: 0.3,
        borderRadius: 100,
      },

      '&:hover': {
        backgroundColor: alpha(theme.palette.secondary.main, 0.1),
      },

      '&.Mui-checked': {
        transform: 'translateX(20px)',
        '& .MuiSwitch-thumb': {
          color: theme.palette.primary.main,
        },
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.primary.main,
          opacity: 0.5,
        },

        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },

        '&.Mui-disabled + .MuiSwitch-track': {
          backgroundColor: theme.palette.action.disabledBackground,
          opacity: 1,
        },
      },

      '&.Mui-disabled + .MuiSwitch-track': {
        backgroundColor: theme.palette.action.disabledBackground,
        opacity: 1,
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.background.paper,
      },
    }),
    thumb: ({ theme }) => ({
      width: 20,
      height: 20,
      boxShadow: theme.shadows[2],
    }),
    track: {
      width: 34,
      height: 14,
      borderRadius: 100,
      opacity: 1,
      transition: 'background-color 0.3s',
    },
  },
};
