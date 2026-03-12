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
      paddingLeft: theme.spacing(theme.spacingTokens.marginMobile),
      paddingRight: theme.spacing(theme.spacingTokens.marginMobile),
      maxWidth: '100%',

      //Tablet (from 768px)
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(theme.spacingTokens.marginTablet),
        paddingRight: theme.spacing(theme.spacingTokens.marginTablet),
      },

      //Desktop (from 1440px)
      [theme.breakpoints.up('lg')]: {
        paddingLeft: theme.spacing(theme.spacingTokens.marginDesktop),
        paddingRight: theme.spacing(theme.spacingTokens.marginDesktop),
      },
    }),
  },
};
