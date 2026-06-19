import { Box, Drawer, IconButton } from '@mui/material';
import { Icon } from './Icon';

interface AppDrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function AppDrawer({ children, onClose, isOpen }: AppDrawerProps) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <IconButton
        onClick={() => {
          onClose();
        }}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 9999,
          border: 'none',
        }}
      >
        <Icon name="close" width={24} height={24} fill="currentColor" />
      </IconButton>

      <Box sx={{ pt: 6 }}>{children}</Box>
    </Drawer>
  );
}
