import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  IconButton,
} from '@mui/material';
import { useAuthStore } from '@/store/auth.store';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';

export function LogoutButton() {
  const [open, setOpen] = useState(false);

  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate('/');
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        startIcon={<LogoutIcon />}
        sx={{
          justifyContent: 'flex-start',
          textTransform: 'none',
          color: 'text.primary',
          fontWeight: 600,
        }}
      >
        Log out
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 32,
            top: 32,
            color: 'text.primary',
          }}
        >
          <CloseIcon sx={{ fontSize: 24 }} />
        </IconButton>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>Are you sure you want to log out from your account?</DialogContent>

        <DialogActions
          sx={{
            flexDirection: 'column',
            gap: 2,
            alignItems: 'stretch',
          }}
        >
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>

          <Button onClick={handleLogout} sx={{ color: 'text.primary', fontWeight: 600 }}>
            Log out
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
