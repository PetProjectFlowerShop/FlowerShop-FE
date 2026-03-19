import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const chipOverrides: Components<Theme>['MuiChip'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.caption,
      fontWeight: 400,
      fontSize: '12px',
      borderRadius: '100px',
      padding: '8px 12px',
      '& .MuiChip-label': {
        padding: '8px 12px',
      },
    }),
  },
};
