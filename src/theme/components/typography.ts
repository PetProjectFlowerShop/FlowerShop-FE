import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';

export const typographyOverrides: Components<Theme>['MuiTypography'] = {
  defaultProps: {
    variant: 'body',
  },
};
