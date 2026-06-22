import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { TopBar } from '../components/top-bar/TopBar';
import { Footer } from '../components/footer/Footer';
import { LoginForm } from '../components/login/LoginForm';
import AppDrawer from '../components/common/AppDrawer';
import { useDrawer } from '../hooks/useDrawer.ts';
import { RouteErrorBoundary } from '../components/error/RouteErrorBoundary';

export function MainLayout() {
  const { drawerView } = useDrawer();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <AppDrawer>
        {drawerView === 'auth' && <LoginForm />}
        {drawerView === 'favorite' && <div>favorite</div>}
        {drawerView === 'cart' && <div>cart</div>}
      </AppDrawer>

      <Stack spacing={2}>
        <TopBar />
        <Header />
      </Stack>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <RouteErrorBoundary>
          <Outlet />
        </RouteErrorBoundary>
      </Box>

      <Footer />
    </Box>
  );
}
