import { Drawer, Box } from '@mui/material'
import { useDrawer } from '../../hooks/useDrawer'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

const AppDrawer = ({ children }: Props) => {
  const { isDrawerOpen, toggleDrawer } = useDrawer()

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={toggleDrawer(false)}
    >
      <Box display="flex" flexDirection="column" minWidth="40vw">
        {children}
      </Box>
    </Drawer>
  )
}

export default AppDrawer;
