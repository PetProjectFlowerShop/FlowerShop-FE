import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

interface DialogCloseButtonProps {
  onClose: () => void;
}

export function DialogCloseButton({ onClose }: DialogCloseButtonProps) {
  return (
    <IconButton
      aria-label="close"
      onClick={onClose}
      sx={{
        position: 'absolute',
        top: { xs: 20, md: 80 },
        right: { xs: 20, md: 80 },
      }}
    >
      <CloseIcon />
    </IconButton>
  );
}
