import { Chip, type ChipProps } from '@mui/material';
import { CancelIcon } from '../../assets/icons/CancelIcon';

type CustomChipProps = ChipProps;

export function CustomChip({ ...props }: CustomChipProps) {
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
      deleteIcon={<CancelIcon />}
    />
  );
}
