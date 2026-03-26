import { Box, Divider, Drawer } from '@mui/material';
import { Menu } from './Menu';
import { HeaderContacts } from './HeaderContacts';
import { SocialLinks } from '../footer/SocialLinks';

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
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          },
        },
      }}
    >
      <Box
        sx={(theme) => ({
          my: theme.spacingTokens.stackS,
          mx: theme.spacingTokens.stackXs,
        })}
      >
        <Menu direction="column" />
      </Box>
      <Divider />
      <Box
        sx={(theme) => ({
          mt: theme.spacingTokens.stackM,
          mx: theme.spacingTokens.stackXs,
          px: theme.spacingTokens.stackXs,
        })}
      >
        <SocialLinks />
      </Box>
      <HeaderContacts />
    </Drawer>
  );
}
