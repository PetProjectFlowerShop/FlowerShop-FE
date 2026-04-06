import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Container, useMediaQuery, IconButton } from '@mui/material';
import { Logo } from '../common/Logo';
import { Menu } from './Menu';
import { SearchFlowers } from './SearchFlowers';
import { UserActions } from './UserActions';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Icon } from '../common/Icon';
import { DrawerHeaderMenu } from './DrawerHeaderMenu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('desktop'));

  return (
    <AppBar
      data-testid="header"
      component="header"
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        pb: 4,
      }}
    >
      <Container maxWidth="desktop">
        <Toolbar
          disableGutters
          sx={(theme) => ({
            minHeight: { xs: 'auto', desktop: 88 },
            py: theme.spacingTokens.stackXs,
            gap: theme.spacingTokens.stackS,
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          })}
        >
          {isMobile && (
            <IconButton
              onClick={() => setIsMenuOpen((prev) => !prev)}
              sx={{ order: 1 }}
              aria-label={isMenuOpen ? 'close menu' : 'open menu'}
            >
              <Icon
                name={isMenuOpen ? 'close' : 'menu'}
                width={isMenuOpen ? 24 : 18}
                height={isMenuOpen ? 24 : 12}
              />
            </IconButton>
          )}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              order: 2,
              flexGrow: isMobile ? 1 : 0,
              display: 'flex',
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}
          >
            <Logo variant="black" />
          </Box>
          {!isMobile && (
            <Box sx={{ order: 3 }}>
              <Menu />
            </Box>
          )}
          <Box
            sx={{
              order: { xs: 5, desktop: 4 },
              width: { xs: '100%', desktop: 'auto' },
              flexGrow: 1,
              maxWidth: { desktop: 431 },
            }}
          >
            <SearchFlowers />
          </Box>

          <Box sx={{ order: isMobile ? 3 : 5 }}>
            <UserActions />
          </Box>
        </Toolbar>
      </Container>
      <DrawerHeaderMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </AppBar>
  );
}
