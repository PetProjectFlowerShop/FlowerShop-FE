import { useDrawer } from '@/hooks/useDrawer.ts';
import { useCartStore } from '@/store/cart.store.ts';
import { useFavoritesStore } from '@/store/favorites.store.ts';
import HeartIconFilled from '@mui/icons-material/Favorite';
import HeartIconOutline from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Box, IconButton } from '@mui/material';
import { Icon } from '../common/Icon.tsx';
import { Link } from 'react-router-dom';

export function UserActions() {
  const { toggleDrawer } = useDrawer();

  const favoritesCount = useFavoritesStore((state) => Object.keys(state.items).length);
  const cartCount = useCartStore((state) =>
    Object.values(state.items).reduce((total, item) => total + item.quantity, 0)
  );
  const displayedCartCount = cartCount > 99 ? '99+' : cartCount;

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        component={Link}
        aria-label="My account"
        sx={(theme) => ({
          color: 'text.primary',
          p: theme.spacingTokens.micro,
        })}
        to="/profile"
        onClick={toggleDrawer('register', true)}
      >
        <Icon name="person" width={24} height={24} />
      </IconButton>

      <IconButton
        aria-label="Favorites"
        sx={(theme) => ({
          color: favoritesCount > 0 ? 'black' : 'text.primary',
          p: theme.spacingTokens.micro,
        })}
        onClick={toggleDrawer('login', true)}
      >
        {favoritesCount > 0 ? <HeartIconFilled /> : <HeartIconOutline />}

        <Badge
          sx={{ position: 'absolute', width: '40px', height: '40px', px: 0 }}
          badgeContent={favoritesCount}
          color="primary"
        />
      </IconButton>

      <IconButton
        aria-label="Cart"
        sx={(theme) => ({
          color: cartCount > 0 ? 'black' : 'text.primary',
          p: theme.spacingTokens.micro,
        })}
        onClick={toggleDrawer('cart', true)}
      >
        <ShoppingCartOutlinedIcon />

        <Badge
          sx={{ position: 'absolute', width: '40px', height: '40px', px: 0 }}
          badgeContent={displayedCartCount}
          color="primary"
        />
      </IconButton>
    </Box>
  );
}
