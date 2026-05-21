import { Box, Chip, MenuItem, Select, Typography } from '@mui/material';

const WRAP_OPTIONS = [
  { value: 'paper', label: 'Craft Paper Wrap (free)' },
  { value: 'luxury', label: 'Luxury Tissue Wrap (+1$)' },
  { value: 'exo', label: 'Eco Linen Wrap (+1$)' },
  { value: 'gold', label: 'Gold Foil Wrap (+2$)' },
  { value: 'silk', label: 'Silk Ribbon Bundle (+2$)' },
  { value: 'matte', label: 'Matte Box (+3$)' },
];

export function ProductWrapSelect() {
  return (
    <>
      <Select defaultValue="paper" sx={{ display: { tablet: 'none' } }}>
        {WRAP_OPTIONS.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
      <Box
        sx={{ display: { xs: 'none', tablet: 'flex' }, flexDirection: { tablet: 'column' } }}
        gap={4}
      >
        <Typography>Select Wrapping</Typography>
        <Box display="flex" flexWrap="wrap" gap={2}>
          {WRAP_OPTIONS.map((opt) => (
            <Chip key={opt.value} label={opt.label} />
          ))}
        </Box>
      </Box>
    </>
  );
}
