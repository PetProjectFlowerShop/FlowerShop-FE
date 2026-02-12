import { createContext } from 'react';

export type LoadingContextValue = {
  showLoading: (message?: string) => void;
  hideLoading: () => void;
};

export const LoadingContext = createContext<LoadingContextValue | null>(null);
