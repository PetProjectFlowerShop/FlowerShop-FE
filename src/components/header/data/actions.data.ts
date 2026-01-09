export type UserAction = {
    label: string,
    icon: string,
    width: number,
    height: number
}

export const userActions: UserAction[] = [
    {label: 'My account', icon: '/images/user-actions-img/my-account.svg', width: 21.33, height: 21.33},
    {label: 'Favorites', icon: '/images/user-actions-img/favorite.svg', width: 20, height: 17.16},
    {label: 'Shopping Cart', icon: '/images/user-actions-img/shopping-cart.svg', width: 25.92, height: 21.33},
]