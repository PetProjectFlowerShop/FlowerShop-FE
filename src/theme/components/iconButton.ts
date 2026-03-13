import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const iconButtonOverrides: Components<Theme>['MuiIconButton'] = {
  variants: [
    {
      props: {
        variant: 'primary',
      },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        borderRadius: '12px',
        color: theme.palette.primary.contrastText,
        '&:hover': { backgroundColor: theme.palette.primary.dark },
        '&:disabled': {
          backgroundColor: theme.palette.action.disabledBackground,
          color: theme.palette.action.disabled,
        },
      }),
    },
    {
      props: {
        variant: 'secondary',
      },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '12px',
        color: theme.palette.secondary.contrastText,
        '&:hover': { backgroundColor: theme.palette.secondary.dark },
        '&:disabled': {
          backgroundColor: theme.palette.action.disabledBackground,
          color: theme.palette.action.disabled,
        },
      }),
    },
    {
      props: {
        variant: 'default',
      },
      style: ({ theme }) => ({
        color: theme.palette.primary.contrastText,
        borderRadius: '12px',
        '&:hover': { backgroundColor: theme.palette.action.hover },
        '&:active': { backgroundColor: theme.palette.action.selected },
        '&:disabled': {
          backgroundColor: theme.palette.action.disabledBackground,
          color: theme.palette.action.disabled,
        },
      }),
    },
    {
      props: { variant: 'filled' },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.common.white,
        borderRadius: '50%',
        color: theme.palette.secondary.contrastText,
        boxShadow: theme.shadows[3],
        '&:hover': { backgroundColor: theme.palette.grey[100], boxShadow: theme.shadows[4] },
        '&:disabled': {
          backgroundColor: theme.palette.action.disabledBackground,
          color: theme.palette.action.disabled,
          boxShadow: 'none',
        },
      }),
    },
  ],
};
