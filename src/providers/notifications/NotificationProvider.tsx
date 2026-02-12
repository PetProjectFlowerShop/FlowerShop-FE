import { useCallback, useMemo, useState } from "react";
import type { AlertColor } from "@mui/material";
import { NotificationContext } from "./NotificationContext";
import { NotificationSnackbar } from "./NotificationSnackbar";

type Props = {
  children: React.ReactNode;
};

const DEFAULT_DURATION = 4000;

export function NotificationProvider({ children }: Props) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("error");
  const [autoHideDuration] = useState(DEFAULT_DURATION);

  const showMessage = useCallback(
    (msg: string, sev: AlertColor = "error") => {
      setMessage(msg);
      setSeverity(sev);
      setOpen(true);
    },
    []
  );

  const handleClose = () => {
    setOpen(false);
    setMessage("");
  };

  const value = useMemo(() => {
    return {
      showMessage,
      showError: (msg: string) => showMessage(msg, "error"),
      showSuccess: (msg: string) => showMessage(msg, "success"),
      showWarning: (msg: string) => showMessage(msg, "warning"),
      showInfo: (msg: string) => showMessage(msg, "info"),
    };
  }, [showMessage]);

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationSnackbar
        open={open}
        message={message}
        severity={severity}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
      />
    </NotificationContext.Provider>
  );
}
