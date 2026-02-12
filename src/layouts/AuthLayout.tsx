// layouts/AuthLayout.tsx
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="background.default"
    >
      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </Box>
  );
}
