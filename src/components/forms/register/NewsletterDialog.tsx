import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

interface NewsletterDialogProps {
  open: boolean;
  isLoading: boolean;
  onChoice: (isMarketingAllow: boolean) => void;
  onClose: () => void;
}

export function NewsletterDialog({ open, isLoading, onChoice, onClose }: NewsletterDialogProps) {
  return (
    <Dialog open={open} onClose={isLoading ? undefined : onClose}>
      <DialogTitle sx={{ textAlign: 'center' }}>Stay in the loop</DialogTitle>

      <DialogContent>
        Be the first to know about new arrivals, promotions, and special offers.
      </DialogContent>

      <DialogActions
        sx={{
          flexDirection: 'column',
          gap: 2,
          alignItems: 'stretch',
        }}
      >
        <Button variant="contained" onClick={() => onChoice(true)} loading={isLoading}>
          Allow
        </Button>

        <Button
          onClick={() => onChoice(false)}
          disabled={isLoading}
          sx={{
            color: 'text.primary',
            fontWeight: 600,
          }}
        >
          Not now
        </Button>
      </DialogActions>
    </Dialog>
  );
}
