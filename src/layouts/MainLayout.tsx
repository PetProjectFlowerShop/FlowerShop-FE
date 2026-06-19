import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { TopBar } from '../components/top-bar/TopBar';
import { Footer } from '../components/footer/Footer';
import { LoginForm } from '../components/login/LoginForm';
import AppDrawer from '../components/common/AppDrawer';
import { useDrawer } from '../hooks/useDrawer.ts';
import { RouteErrorBoundary } from '../components/error/RouteErrorBoundary';
import { CartForm } from '@/components/common/CartForm.tsx';

export function MainLayout() {
  const { drawerView, isDrawerOpen, closeDrawer } = useDrawer();
  const drawerData = useDrawer();
  console.log('Що всередині useDrawer:', drawerData);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <AppDrawer isOpen={isDrawerOpen} onClose={closeDrawer}>
        {drawerView === 'auth' && <LoginForm />}
        {drawerView === 'favorite' && <div>favorite</div>}
        {drawerView === 'cart' && <CartForm cartItems={[]} onClose={closeDrawer} />}
      </AppDrawer>

      <TopBar />
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <RouteErrorBoundary>
          <Outlet />
        </RouteErrorBoundary>
      </Box>

      <Footer />
    </Box>
  );
}
