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
    notched: false,
  },
  styleOverrides: {
    input: ({ theme }) => ({
      '&::placeholder': {
        ...theme.typography.placeholder,
        color: theme.palette.text.disabled,
        opacity: 1,
      },
    }),
    root: ({ theme }) => ({
      width: '100%',
      borderWidth: '1px',
      borderRadius: '12px',
      backgroundColor: theme.palette.background.paper,
      transition: theme.transitions.create(['border-color', 'border-width', 'box-shadow']),
      paddingLeft: '4px',
      paddingRight: '4px',

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.action.active, // theme.palette.divider,
        borderWidth: '1px',
        borderRadius: '12px',
      },

      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.dark,
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
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        height: '100%',
        boxSizing: 'border-box',
      },
    }),
  },
};

export const inputLabelOverrides: Components<Theme>['MuiInputLabel'] = {
  defaultProps: {
    shrink: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      position: 'relative',
      transform: 'none',
      marginBottom: '4px',
      marginLeft: '4px',
      ...theme.typography.body1,
      color: theme.palette.text.primary,

      '&.Mui-focused': {
        color: theme.palette.text.primary,
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
