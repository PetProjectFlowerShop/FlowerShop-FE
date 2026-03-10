import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Container } from '@mui/material';
import { Logo } from '../common/Logo';
import { Menu } from './Menu';
import { SearchFlowers } from './SearchFlowers';
import { UserActions } from './UserActions';
import { type Theme } from '@mui/material/styles';

export function Header() {
  return (
    <AppBar
      component="header"
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={(theme: Theme) => ({
            height: 88,
            display: 'flex',
            justifyContent: 'space-between',
            py: theme.spacing(theme.spacingTokens.stackXs),
          })}
        >
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Logo variant="black" width="122" height="40" />
          </Box>
          <Menu />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SearchFlowers />
            <UserActions />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
