import { useState, type ReactNode } from 'react';
import { DrawerContext } from '../contexts/drawer-context.ts';
import { type UserActionType } from '../components/header/data/actions.data.ts';

type Props = {
  children: ReactNode;
};

export default function DrawerProvider({ children }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerView, setDrawerView] = useState<UserActionType>('auth');

  const toggleDrawer = (type: UserActionType, newOpen: boolean) => () => {
    setDrawerView(type);
    setIsDrawerOpen(newOpen);
  };

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerView, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}
