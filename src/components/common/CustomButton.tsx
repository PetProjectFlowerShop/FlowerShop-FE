import { Box, Button, type ButtonProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import type { ReactNode } from 'react';

type CustomButtonProps = ButtonProps & {
  children: ReactNode;
};

export const CustomButton = ({ variant = 'text', children, ...rest }: CustomButtonProps) => {
  const theme = useTheme();
  const shouldWrap = variant === 'outlined' || variant === 'text';
  const content = shouldWrap ? (
    <Box component="span" sx={{ color: theme.palette.text.primary }}>
      {children}
    </Box>
  ) : (
    children
  );

  return (
    <Button variant={variant} {...rest}>
      {content}
    </Button>
  );
};
