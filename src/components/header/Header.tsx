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

type HeaderProps = {
  visible: boolean;
};

export function Header({ visible }: HeaderProps) {
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
        borderBottom: '1px solid',
        borderColor: 'dividerLight',

        top: 0,
        transition: 'transform 300ms ease',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
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
              <Icon name={isMenuOpen ? 'close' : 'menu'} width={24} height={24} />
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
