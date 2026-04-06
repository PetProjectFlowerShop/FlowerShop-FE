import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const formControlLabelOverrides: Components<Theme>['MuiFormControlLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      margin: 0,
      gap: '4px',
      alignItems: 'flex-start',

      '& .MuiFormControlLabel-label': {
        fontFamily: theme.typography.fontFamily,
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: 1.4,
        letterSpacing: '0px',
        color: theme.palette.text.primary,

        [theme.breakpoints.up('tablet')]: {
          fontSize: '20px',
        },

        '&.Mui-disabled': {
          color: theme.palette.text.disabled,
        },
      },
    }),
  },
};
