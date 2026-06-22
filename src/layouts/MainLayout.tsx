import { useHeaderVisibility } from '@/components/header/useHeaderVisibility.ts';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppDrawer from '../components/common/AppDrawer';
import { RouteErrorBoundary } from '../components/error/RouteErrorBoundary';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { LoginForm } from '../components/login/LoginForm';
import { TopBar } from '../components/top-bar/TopBar';
import { useDrawer } from '../hooks/useDrawer.ts';

export function MainLayout() {
  const { drawerView } = useDrawer();
  const { topBarVisible, headerVisible } = useHeaderVisibility();
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
