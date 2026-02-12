import { Snackbar, Alert } from '@mui/material';
import type { AlertColor } from '@mui/material';

type Props = {
  open: boolean;
  message: string;
  severity: AlertColor;
  autoHideDuration: number;
  onClose: () => void;
};

export function NotificationSnackbar({
  open,
  message,
  severity,
  autoHideDuration,
  onClose,
}: Props) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
