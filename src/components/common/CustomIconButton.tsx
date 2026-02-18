import { IconButton, type IconButtonProps } from '@mui/material';
import { type SxProps, type Theme } from '@mui/material/styles';

type ButtonVariant = 'default' | 'primary' | 'secondary' | 'filled';

const variantStyles: Record<ButtonVariant, (theme: Theme) => SxProps<Theme>> = {
  primary: (theme) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: '12px',
    color: theme.palette.primary.contrastText,
    '&:hover': { backgroundColor: theme.palette.primary.dark },
    '&:disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.action.disabled,
    },
  }),
  secondary: (theme) => ({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '12px',
    color: theme.palette.secondary.contrastText,
    '&:hover': { backgroundColor: theme.palette.secondary.dark },
    '&:disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.action.disabled,
    },
  }),
  default: (theme) => ({
    color: theme.palette.primary.contrastText,
    borderRadius: '12px',
    '&:hover': { backgroundColor: theme.palette.action.hover },
    '&:active': { backgroundColor: theme.palette.action.selected },
    '&:disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.action.disabled,
    },
  }),
  filled: (theme) => ({
    backgroundColor: theme.palette.common.white,
    borderRadius: 'full',
    color: theme.palette.secondary.contrastText,
    boxShadow: theme.shadows[3],
    '&:hover': { backgroundColor: theme.palette.grey[100], boxShadow: theme.shadows[4] },
    '&:disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.action.disabled,
      boxShadow: 'none',
    },
  }),
};

type CustomIconButtonProps = IconButtonProps & { variant?: ButtonVariant };
export const CustomIconButton = ({
  variant = 'default',
  children,
  ...rest
}: CustomIconButtonProps) => {
  return (
    <IconButton {...rest} sx={(theme) => ({ ...variantStyles[variant](theme) })}>
      {children}
    </IconButton>
  );
};
