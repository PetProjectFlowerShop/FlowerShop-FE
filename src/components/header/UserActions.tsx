import { Box, IconButton } from '@mui/material';
import { userActions } from './data/actions.data';
import { useDrawer } from '../../hooks/useDrawer.ts';
import { Icon } from '../common/Icon.tsx';
import { type Theme } from '@mui/material/styles';

export function UserActions() {
  const { toggleDrawer } = useDrawer();

  return (
    <Box sx={{ display: 'flex' }}>
      {userActions.map((action) => (
        <IconButton
          key={action.label}
          aria-label={action.label}
          sx={(theme: Theme) => ({
            color: 'text.primary',
            p: theme.spacing(theme.spacingTokens.micro),
          })}
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
