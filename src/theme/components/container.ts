import { type Components, type Theme } from '@mui/material/styles';

export const containerOverrides: Components<Theme>['MuiContainer'] = {
  defaultProps: {
    maxWidth: 'lg',
    disableGutters: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',

      //Mobile (from 0)
      px: theme.spacing(theme.spacingTokens.marginMobile),
      maxWidth: '100%',

      //Tablet (from 768px)
      [theme.breakpoints.up('md')]: {
        px: theme.spacing(theme.spacingTokens.marginTablet),
        maxWidth: 768,
      },

      //Desktop (from 1440px)
      [theme.breakpoints.up('lg')]: {
        px: theme.spacing(theme.spacingTokens.marginDesktop),
        maxWidth: 1440,
      },
    }),
  },
};
