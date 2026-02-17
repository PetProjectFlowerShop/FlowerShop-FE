import React from 'react';
import { Button, styled, type ButtonProps } from '@mui/material';

const StyledButton = styled(Button)(() => ({
  padding: 0,
  borderRadius: '12px',
  width: 40,
  height: 40,
  minWidth: 0,
  minHeight: 0,
}));

export const ButtonIcon: React.FC<ButtonProps> = ({
  variant = 'text',
  color = 'primary',
  children,
  ...rest
}) => {
  return (
    <StyledButton variant={variant} color={color} {...rest}>
      {children}
    </StyledButton>
  );
};
