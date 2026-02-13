import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Container } from '@mui/material';
import { Logo } from '../common/Logo';
import { Menu } from './Menu';
import { SearchFlowers } from './SearchFlowers';
import { UserActions } from './UserActions';

export function Header() {
  return (
    <AppBar
      component="header"
      position="sticky"
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        p: '15px 15px',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
          }}
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
            <Logo variant="black" />
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
