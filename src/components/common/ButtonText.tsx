import { Button, Typography } from '@mui/material';
import type { ButtonProps } from '@mui/material';

type ButtonTextProps = ButtonProps & {
  children: React.ReactNode;
};

export const ButtonText = ({
  children,
  color = 'primary',
  variant = 'text',
  ...props
}: ButtonTextProps) => {
  return (
    <Button color={color} variant={variant} {...props}>
      <Typography variant="button" color="text.primary">
        {children}
      </Typography>
    </Button>
  );
};
