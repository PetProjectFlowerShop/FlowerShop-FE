import { createContext } from 'react';
import type { UserActionType } from '../types/actions';

type DrawerContextType = {
  isDrawerOpen: boolean;
  drawerView: UserActionType;
  closeDrawer: () => void;
  toggleDrawer: (type: UserActionType, bool: boolean) => () => void;
};

export const DrawerContext = createContext<DrawerContextType | null>(null);
