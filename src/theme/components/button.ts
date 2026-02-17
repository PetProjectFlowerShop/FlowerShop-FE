import type { ButtonProps } from '@mui/material';
import { alpha, type Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

type ButtonOwnerState = Pick<ButtonProps, 'color' | 'variant'>;

const getButtonVariantStyles = (theme: Theme, ownerState: ButtonOwnerState, textColor: string) => {
  const colorKey =
    ownerState.color && ownerState.color !== 'inherit' ? ownerState.color : 'primary';

  const mainColor = theme.palette[colorKey].main;

  return {
    color: textColor,

    '& .MuiTouchRipple-root .MuiTouchRipple-child': {
      backgroundColor: alpha(mainColor, 0.15),
    },
    '&:hover': {
      backgroundColor: alpha(mainColor, 0.1),
    },
  };
};

export const buttonOverrides: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: {
      padding: '16px 20px',
      borderRadius: '24px',
      fontSize: '20px',
    },
    outlined: ({ theme, ownerState }) =>
      getButtonVariantStyles(theme, ownerState, theme.palette.text.primary),
    text: ({ theme, ownerState }) =>
      getButtonVariantStyles(theme, ownerState, theme.palette.text.primary),
  },
};
