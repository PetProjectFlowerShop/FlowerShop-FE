// AppProviders is a single place to configure all application-level providers.
// This keeps main.tsx clean and makes it easy to add new global providers
// (e.g. auth, data fetching, feature flags) in one place.

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '../theme';
import DrawerProvider from '../providers/DrawerProvider';
import { LoadingProvider } from './loading/LoadingProvider';
import { NotificationProvider } from './notifications/NotificationProvider';
import { queryClient } from '../lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
  children: React.ReactNode;
};

export function AppProviders({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <DrawerProvider>
            <LoadingProvider>
              <NotificationProvider>{children}</NotificationProvider>
            </LoadingProvider>
          </DrawerProvider>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
