import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { TopBar } from '@/components/top-bar/TopBar';
import { useHeaderVisibility } from '@/components/header/useHeaderVisibility.ts';

import { DrawerContent } from '@/components/common/DrawerContent.tsx';
import { CheckEmail } from '@/components/forms/check-email/CheckEmail.tsx';
import { LoginForm } from '@/components/forms/login/LoginForm.tsx';
import { NewPasswordForm } from '@/components/forms/new-password/NewPasswordForm.tsx';
import { PasswordRecoveryForm } from '@/components/forms/password-recovery/PasswordRecoveryForm.tsx';
import { RegisterForm } from '@/components/forms/register/RegisterForm.tsx';

import AppDrawer from '@/components/common/AppDrawer';
import { CartForm } from '@/components/common/CartForm.tsx';

import { RouteErrorBoundary } from '@/components/error/RouteErrorBoundary';
import { useDrawer } from '@/hooks/useDrawer';

export function MainLayout() {
  const { topBarVisible, headerVisible } = useHeaderVisibility();
  const { drawerView, isDrawerOpen, closeDrawer } = useDrawer();

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
        <DrawerContent>
          {drawerView === 'register' && <RegisterForm />}
          {drawerView === 'login' && <LoginForm />}
          {drawerView === 'password-recovery' && <PasswordRecoveryForm />}
          {drawerView === 'check-email' && <CheckEmail />}
          {drawerView === 'new-password' && <NewPasswordForm />}
          {drawerView === 'cart' && <CartForm onClose={closeDrawer} />}
        </DrawerContent>
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
