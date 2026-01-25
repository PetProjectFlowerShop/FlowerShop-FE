import { Snackbar, Alert } from "@mui/material";

type Props = {
  open: boolean;
  message: string;
  onClose: () => void;
};

export function ErrorSnackbar({ open, message, onClose }: Props) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={onClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
