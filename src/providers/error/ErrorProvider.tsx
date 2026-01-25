/**
 * ErrorProvider is a global context provider used to handle
 * non-critical runtime and API errors across the application.
 *
 * It exposes a `showError` function via context, allowing any component
 * to trigger a global error notification without managing UI state locally.
 *
 * Responsibilities:
 * - Centralized error handling for API and logical errors
 * - Displaying a global error snackbar using MUI
 * - Automatically hiding the error message after user interaction or timeout
 *
 * This provider is intended for recoverable errors and should not be used
 * for render-breaking errors, which are handled by Error Boundaries.
 */

import { useCallback, useState } from "react";
import { ErrorContext } from "./ErrorContext";
import { ErrorSnackbar } from "./ErrorSnackbar";

type Props = {
  children: React.ReactNode;
};

export function ErrorProvider({ children }: Props) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showError = useCallback((msg: string) => {
    setMessage(msg);
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setMessage("");
  };

  return (
    <ErrorContext.Provider value={{ showError }}>
      {children}
      <ErrorSnackbar
        open={open}
        message={message}
        onClose={handleClose}
      />
    </ErrorContext.Provider>
  );
}
