/**
 * LoadingProvider is a global context provider responsible for managing
 * application-wide loading state.
 *
 * It exposes `showLoading` and `hideLoading` functions via context,
 * allowing any component to trigger a single global loading indicator
 * without coupling UI logic to individual pages or components.
 *
 * Responsibilities:
 * - Centralized control of global loading state
 * - Displaying a full-screen loading overlay using MUI
 * - Supporting optional contextual loading messages
 *
 * This provider is intended for global or long-running operations.
 * Local or component-specific loading states should be handled separately
 * when appropriate.
 */

import { useCallback, useState } from 'react';
import { LoadingContext } from './LoadingContext';
import { GlobalLoading } from '../../components/common/GlobalLoading';

type Props = {
  children: React.ReactNode;
};

export function LoadingProvider({ children }: Props) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | undefined>(undefined);

  const showLoading = useCallback((msg?: string) => {
    setMessage(msg);
    setOpen(true);
  }, []);

  const hideLoading = useCallback(() => {
    setOpen(false);
    setMessage(undefined);
  }, []);

  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading }}>
      {children}
      <GlobalLoading open={open} message={message} />
    </LoadingContext.Provider>
  );
}
