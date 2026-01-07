import { createContext } from 'react'

type DrawerContextType = {
  isDrawerOpen: boolean
  toggleDrawer: (bool: boolean) => () => void
}

export const DrawerContext = createContext<DrawerContextType | null>(null)

