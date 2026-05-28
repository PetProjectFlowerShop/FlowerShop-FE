import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles';
import { Icon } from '@/components/common/Icon';

export const chipOverrides: Components<Theme>['MuiChip'] = {
  defaultProps: {
    deleteIcon: <Icon width={16} height={16} name="cancel" />,
    variant: 'outlined',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.caption,
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 12,
      letterSpacing: 0,
      '& .MuiChip-label': {
        paddingLeft: '10px',
        paddingRight: '10px',
      },
      '&.MuiChip-filled': {
        borderWidth: 2,
      },
      '& .MuiChip-deleteIcon': {
        fontSize: 16,
        color: theme.palette.text.primary,
        '&:hover': {
          color: theme.palette.text.primary,
        },
      },
    }),
  },
};
