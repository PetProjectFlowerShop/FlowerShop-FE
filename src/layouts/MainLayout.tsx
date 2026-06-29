import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { TopBar } from '../components/top-bar/TopBar';
import { Footer } from '../components/footer/Footer';
import { LoginForm } from '../components/login/LoginForm';
import AppDrawer from '../components/common/AppDrawer';
import { useDrawer } from '../hooks/useDrawer.ts';
import { RouteErrorBoundary } from '../components/error/RouteErrorBoundary';
import { useHeaderVisibility } from '@/components/header/useHeaderVisibility.ts';
import { CartForm } from '@/components/common/CartForm.tsx';
import { useCartStore } from '@/store/cart.store.ts';

export function MainLayout() {
  const { topBarVisible, headerVisible } = useHeaderVisibility();
  const { drawerView, isDrawerOpen, closeDrawer } = useDrawer();
  const cartItemsRecord = useCartStore((state) => state.items);
  const cartItemsArray = Object.values(cartItemsRecord);

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
        {drawerView === 'cart' && <CartForm cartItems={cartItemsArray} onClose={closeDrawer} />}
      </AppDrawer>

      <TopBar visible={topBarVisible} />
      <Header visible={headerVisible} />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <RouteErrorBoundary>
          <Outlet />
        </RouteErrorBoundary>
      </Box>

      <Footer />
    </Box>
  );
}
