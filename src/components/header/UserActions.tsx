import { useDrawer } from '@/hooks/useDrawer.ts';
import { useCartStore } from '@/store/cart.store.ts';
import { useFavoritesStore } from '@/store/favorites.store.ts';
import HeartIconFilled from '@mui/icons-material/Favorite';
import HeartIconOutline from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Box, IconButton } from '@mui/material';
import { Icon } from '../common/Icon.tsx';

export function UserActions() {
  const { toggleDrawer } = useDrawer();

  const favoritesCount = useFavoritesStore((state) => Object.keys(state.items).length);

  const cartCount = useCartStore((state) =>
    Object.values(state.items).reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        aria-label="My account"
        sx={(theme) => ({
          color: 'text.primary',
          p: theme.spacingTokens.micro,
        })}
        href="/profile"
      >
        <Icon name="person" width={24} height={24} />
      </IconButton>

      <IconButton
        aria-label="Favorites"
        sx={(theme) => ({
          color: favoritesCount > 0 ? 'black' : 'text.primary',
          p: theme.spacingTokens.micro,
        })}
        onClick={toggleDrawer('favorite', true)}
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
          badgeContent={cartCount}
          color="primary"
        />
      </IconButton>
    </Box>
  );
}
