import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DialogCloseButton } from './DialogCloseButton';

interface FeedbackSuccessDialogProps {
  open: boolean;
  onClose: () => void;
}

export function FeedbackSuccessDialog({ open, onClose }: FeedbackSuccessDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogCloseButton onClose={onClose} />

      <DialogTitle>Thank you!</DialogTitle>

      <DialogContent>Our manager will contact you soon.</DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" fullWidth>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
