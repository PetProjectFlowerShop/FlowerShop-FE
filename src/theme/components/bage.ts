import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const badgeOverrides: Components<Theme>['MuiBadge'] = {
  styleOverrides: {
    badge: ({ theme }) => ({
      ...theme.typography.caption,
      fontWeight: 700,
      fontSize: '12px',
      width: 19,
      height: 20,
      opacity: 1,
      borderRadius: '100px',
      paddingLeft: '6.5px',
      paddingRight: '6.5px',
      minWidth: 'unset',
    }),
  },
};
