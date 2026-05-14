import { Box } from '@mui/material';

type Props = {
  option: { value: string; label: string };
};

const getColorStyle = (value: string) => {
  switch (value) {
    case 'red':
      return '#ef4444';
    case 'pink':
      return '#ec4899';
    case 'white':
      return '#f5f5f5';
    case 'yellow':
      return '#facc15';
    case 'orange':
      return '#f97316';
    case 'cream':
      return '#f5e6c8';
    case 'green':
      return '#22c55e';
    case 'purple':
      return '#a855f7';
    case 'blue':
      return '#3b82f6';
    case 'mixed':
      return 'conic-gradient(#ef4444, #facc15, #22c55e, #3b82f6, #a855f7, #ef4444)';
    default:
      return '#ccc';
  }
};

export function ColorLabel({ option }: Props) {
  const needBorder = ['cream', 'white'].includes(option.value);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box
        sx={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: getColorStyle(option.value),
          border: needBorder ? '1px solid #ccc' : 'none',
        }}
      />
      {option.label}
    </Box>
  );
}
