import { Chip, useTheme, type ChipProps } from '@mui/material';
import { Icon } from './Icon';

type CustomChipProps = ChipProps;

export function CustomChip({ ...props }: CustomChipProps) {
  const theme = useTheme();
  return (
    <Chip
      {...props}
      sx={{
        borderRadius: 3,
        '& .MuiChip-label': {
          color: 'text.primary',
          fontSize: 16,
          lineHeight: 1.5,
        },
        '& .MuiChip-deleteIcon': {
          fontSize: 16,
        },
      }}
      deleteIcon={
        <Icon style={{ color: theme.palette.text.primary }} width={16} height={16} name="cancel" />
      }
    />
  );
}
