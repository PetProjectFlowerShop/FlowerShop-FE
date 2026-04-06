import { UserAction } from '../../../types/actions';

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
