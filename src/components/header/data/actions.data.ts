export type UserActionType = 'auth' | 'favorite' | 'cart'

export type UserAction = {
    type: UserActionType,
    label: string,
    icon: string,
    width: number,
    height: number,
}

export const userActions: UserAction[] = [
  {
    type: 'auth',
    label: 'My account',
    icon: '/images/user-actions-img/my-account.svg',
    width: 21.33,
    height: 21.33
  },
  {
    type: 'favorite',
    label: 'Favorites',
    icon: '/images/user-actions-img/favorite.svg',
    width: 20,
    height: 17.16
  },
  {
    type: 'cart',
    label: 'Shopping Cart',
    icon: '/images/user-actions-img/shopping-cart.svg',
    width: 25.92,
    height: 21.33,
  },
]
