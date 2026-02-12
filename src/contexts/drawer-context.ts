import { createContext } from 'react';
import { type UserActionType } from '../components/header/data/actions.data.ts';

type DrawerContextType = {
  isDrawerOpen: boolean;
  drawerView: UserActionType;
  toggleDrawer: (type: UserActionType, bool: boolean) => () => void;
};

export const DrawerContext = createContext<DrawerContextType | null>(null);
