import type { IconName } from '../../common/Icon';

export type UserActionType = 'auth' | 'favorite' | 'cart';

export type UserAction = {
  type: UserActionType;
  label: string;
  icon: IconName;
  width: number;
  height: number;
};

export const userActions: UserAction[] = [
  {
    type: 'auth',
    label: 'My account',
    icon: 'person',
    width: 24,
    height: 24,
  },
  {
    type: 'favorite',
    label: 'Favorites',
    icon: 'active-no',
    width: 24,
    height: 24,
  },
  {
    type: 'cart',
    label: 'Shopping Cart',
    icon: 'shopping-cart',
    width: 24,
    height: 24,
  },
];
