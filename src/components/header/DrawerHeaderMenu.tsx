import { Box, Divider, Drawer } from '@mui/material';
import { type Theme } from '@mui/material/styles';
import { Menu } from './Menu';
import { SocialsRow } from './SocialsRow';
import { HeaderContacts } from './HeaderContacts';

interface DrawerHeaderProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DrawerHeaderMenu({ isOpen, onClose }: DrawerHeaderProps) {
  return (
    <Drawer
      anchor="bottom"
      open={isOpen}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      slotProps={{
        paper: {
          sx: {
            width: '100%',
            height: 'calc(100vh - 120px)',
            maxHeight: 'none',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          },
        },
      }}
    >
      <Box
        sx={(theme: Theme) => ({
          my: theme.spacing(theme.spacingTokens.stackS),
          mx: theme.spacing(theme.spacingTokens.stackXs),
        })}
      >
        <Menu direction="column" />
      </Box>
      <Divider />
      <SocialsRow />
      <HeaderContacts />
    </Drawer>
  );
}
