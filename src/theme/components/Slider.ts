import { alpha, type Components, type Theme } from '@mui/material/styles';

export const sliderOverrides: Components<Theme>['MuiSlider'] = {
  styleOverrides: {
    root: {
      width: 160,
      height: 44,
      padding: '13px 0',
      display: 'inline-block',
    },
    thumb: ({ theme }) => ({
      width: 20,
      height: 20,
      backgroundColor: theme.palette.primary.main,
      borderRadius: '20px',
      boxShadow: theme.shadows[3],
      '&:hover, &.Mui-focusVisible': {
        boxShadow: `0px 0px 0px 11px ${alpha(theme.palette.primary.main, 0.1)}`,
      },
      '&.Mui-active': {
        boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.primary.main, 0.2)}`,
      },
      '&.Mui-disabled': {
        width: 20,
        height: 20,
        backgroundColor: theme.palette.action.disabled,
        boxShadow: theme.shadows[3],
      },
    }),
    track: {
      height: 2,
      border: 'none',
    },
    rail: ({ theme }) => ({
      height: 2,
      opacity: 0.38,
      backgroundColor: theme.palette.primary.main,
    }),
    mark: ({ theme }) => ({
      width: 2,
      height: 2,
      borderRadius: '100px',
      backgroundColor: theme.palette.primary.contrastText,
      opacity: 1,
    }),
    markActive: ({ theme }) => ({
      backgroundColor: theme.palette.primary.contrastText,
      opacity: 0.8,
    }),
  },
};
