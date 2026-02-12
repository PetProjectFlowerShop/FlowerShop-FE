import { useLocation } from 'react-router-dom';
import { ErrorBoundary } from './ErrorBoundary';

export function RouteErrorBoundary({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return <ErrorBoundary key={location.pathname}>{children}</ErrorBoundary>;
}
