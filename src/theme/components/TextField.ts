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
      minHeight: '56px',
      width: '100%',
      borderWidth: '1px',
      borderRadius: '10px',
      backgroundColor: theme.palette.background.paper,
      transition: theme.transitions.create(['border-color', 'border-width', 'box-shadow']),

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.divider,
      },

      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },

      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
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
    }),
  },
};

export const inputLabelOverrides: Components<Theme>['MuiInputLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      position: 'relative',
      transform: 'none',
      marginBottom: '4px',
      ...theme.typography.caption,
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
