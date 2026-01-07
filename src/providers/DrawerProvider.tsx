import { useState, type ReactNode } from "react"
import { DrawerContext } from "../contexts/drawer-context.ts"

type Props = {
  children: ReactNode
}

export default function DrawerProvider({ children }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsDrawerOpen(newOpen);
  };

  return (
    <DrawerContext.Provider
      value={{ isDrawerOpen, toggleDrawer }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
