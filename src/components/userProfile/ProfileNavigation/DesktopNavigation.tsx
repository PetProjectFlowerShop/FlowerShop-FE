import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

import { profileNavigation } from './data/profileNavigation';

const NavigationLink = styled(NavLink)(({ theme }) => ({
  height: 52,
  width: '100%',
  padding: '8px 16px',
  display: 'flex',
  alignItems: 'center',
  ...theme.typography.body,
  color: theme.palette.text.primary,
  textDecoration: 'none',
  borderRadius: 12,
  '&:hover': {
    backgroundColor: 'rgba(132, 145, 89, 0.1);',
  },
  '&.active': { backgroundColor: '#c2c9ae' },
}));

export function DesktopNavigation() {
  return (
    <Stack spacing={3}>
      {profileNavigation.map((item) => (
        <NavigationLink key={item.value} to={item.value}>
          {item.label}
        </NavigationLink>
      ))}
    </Stack>
  );
}
