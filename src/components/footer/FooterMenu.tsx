import { Box, Link } from '@mui/material';
import { menuItems } from '../header/data/menu.data';
import { Link as RouterLink } from 'react-router-dom';

export default function FooterMenu() {
  return (
    <Box component="nav">
      <Box
        component="ul"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          listStyle: 'none',
          p: 0,
          m: 0,
        }}
      >
        {menuItems.map((item) => {
          return (
            <Box component="li" key={item.path}>
              <Link component={RouterLink} to={item.path}>
                {item.label}
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
