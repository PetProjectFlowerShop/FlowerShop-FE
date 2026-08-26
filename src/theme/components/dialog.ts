import { type Components, type Theme } from '@mui/material/styles';

export const dialogOverrides: Components<Theme>['MuiDialog'] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      position: 'relative',
      padding: 80,
      paddingTop: 144,
      width: '100%',
      maxWidth: 496,
      borderRadius: 20,
      marginBottom: 16,

      boxShadow:
        '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',

      backgroundColor: theme.palette.primary.contrastText,

      [theme.breakpoints.down('md')]: {
        padding: 40,
        paddingTop: 104,
      },

      [theme.breakpoints.down('sm')]: {
        padding: 16,
        paddingTop: 48,
      },
    }),
  },
};

export const dialogTitleOverrides: Components<Theme>['MuiDialogTitle'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      marginBottom: 16,
      fontFamily: '"Playfair Display", serif',
      fontSize: 64,
      fontWeight: 400,
      lineHeight: 1.12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,

      [theme.breakpoints.down('md')]: {
        fontSize: 40,
      },
    }),
  },
};

export const dialogContentOverrides: Components<Theme>['MuiDialogContent'] = {
  styleOverrides: {
    root: {
      padding: 0,
      textAlign: 'center',
    },
  },
};

export const dialogActionsOverrides: Components<Theme>['MuiDialogActions'] = {
  styleOverrides: {
    root: {
      padding: 0,
      marginTop: 40,
      justifyContent: 'center',
    },
  },
};
