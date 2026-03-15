import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const chipOverrides: Components<Theme>['MuiChip'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.caption,
      fontWeight: 600,
      fontSize: '12px',
      opacity: 1,
      borderRadius: '16px',
      color: 'primary.contrastText',
      paddingLeft: '6.5px',
      paddingRight: '6.5px',
      minWidth: 'unset',
    }),
  },
};
