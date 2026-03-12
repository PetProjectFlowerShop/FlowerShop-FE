import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const buttonOverrides: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(2, 2.5),
      borderRadius: 20,
      paddingLeft: theme.spacingTokens.stackS * 4,
      paddingRight: theme.spacingTokens.stackS * 4,
      paddingTop: theme.spacingTokens.stackXs * 4,
      paddingBottom: theme.spacingTokens.stackXs * 4,
      ...theme.typography.button,
      width: '100%',
    }),
  },
};
