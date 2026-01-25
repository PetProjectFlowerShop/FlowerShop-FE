import { createContext } from "react";

export type ErrorContextValue = {
  showError: (message: string) => void;
};

export const ErrorContext = createContext<ErrorContextValue | null>(null);
