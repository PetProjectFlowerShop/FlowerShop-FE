import { Box, IconButton } from '@mui/material';
import { userActions } from './data/actions.data';
import { useDrawer } from '../../hooks/useDrawer.ts';
import { Icon } from '../common/Icon.tsx';

export function UserActions() {
  const { toggleDrawer } = useDrawer();

  return (
    <Box sx={{ ml: 2 }}>
      {userActions.map((action) => (
        <IconButton
          key={action.label}
          aria-label={action.label}
          sx={{ color: 'text.primary' }}
          onClick={toggleDrawer(action.type, true)}
        >
          <Icon
            name={action.icon}
            width={action.width}
            height={action.height}
            style={{ display: 'block', fill: 'currentColor' }}
          />
        </IconButton>
      ))}
    </Box>
  );
}
