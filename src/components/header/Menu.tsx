import { Box, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from './data/menu.data';

type MenuProps = {
  direction?: 'row' | 'column';
  color?: 'light' | 'dark';
};

export function Menu({ direction = 'row', color = 'dark' }: MenuProps) {
  const location = useLocation();

  return (
    <Box component="nav" sx={{ ml: 4 }}>
      <Box
        component="ul"
        sx={{
          display: 'flex',
          gap: direction === 'row' ? 4 : 2,
          flexDirection: direction,
          listStyle: 'none',
          p: 0,
          m: 0,
        }}
      >
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Box component="li" key={item.path}>
              <Button
                component={Link}
                to={item.path}
                sx={{
                  textTransform: 'none',
                  fontSize: 20,
                  padding: 0,
                  justifyContent: direction === 'column' ? 'flex-start' : 'center',
                  color: isActive
                    ? 'primary.main'
                    : color === 'light'
                      ? 'common.white'
                      : 'text.primary',

                  minWidth: 'auto',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {item.label}
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
