import { Drawer, Box } from '@mui/material';
import { useDrawer } from '@/hooks/useDrawer';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const AppDrawer = ({ children }: Props) => {
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={toggleDrawer('auth', false)}
      slotProps={{
        paper: {
          sx: {
            width: {
              xs: '100%',
              sm: 640,
              md: 708,
            },
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
