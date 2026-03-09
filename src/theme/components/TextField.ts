import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const textFieldOverrides: Components<Theme>['MuiTextField'] = {
  defaultProps: {
    variant: 'outlined',
    fullWidth: true,
  },
  styleOverrides: {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  },
};

export const outlinedInputOverrides: Components<Theme>['MuiOutlinedInput'] = {
  defaultProps: {
    fullWidth: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      width: '100%',
      borderRadius: '8px',
      backgroundColor: theme.palette.background.paper,
      transition: theme.transitions.create(['border-color', 'border-width', 'box-shadow']),

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.divider,
        borderWidth: '1px',
      },

      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: '1px',
      },

      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: '1px',
      },

      '&.Mui-disabled': {
        opacity: 1,
        backgroundColor: theme.palette.action.disabledBackground,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.action.disabled,
        },
      },

      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.error.main,
      },

      '& .MuiOutlinedInput-input': {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        height: '100%',
        boxSizing: 'border-box',
      },
    }),
  },
};

export const inputLabelOverrides: Components<Theme>['MuiInputLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      position: 'relative',
      transform: 'none',
      marginBottom: '4px',
      ...theme.typography.body1,
      color: theme.palette.text.secondary,

      '&.Mui-focused': {
        color: theme.palette.primary.main,
      },
      '&.Mui-error': {
        color: theme.palette.error.main,
      },
    }),
  },
};

export const formHelperTextOverrides: Components<Theme>['MuiFormHelperText'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      margin: '4px 0 0 0',
      ...theme.typography.caption,
      color: theme.palette.text.secondary,

      '&.Mui-error': {
        color: theme.palette.error.main,
      },
    }),
  },
};
