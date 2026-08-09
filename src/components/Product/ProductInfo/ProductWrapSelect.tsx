import type { PackagingType } from '@/types/product';
import { Box, Chip, MenuItem, Select, Typography } from '@mui/material';

type ProductWrapSelectProps = {
  packagingOptions: PackagingType[];
  selectedWrap: number;
  onWrapChange: (wrapId: number) => void;
};

export function ProductWrapSelect({
  packagingOptions,
  selectedWrap,
  onWrapChange,
}: ProductWrapSelectProps) {
  return (
    <>
      <Select
        value={selectedWrap}
        onChange={(e) => onWrapChange(Number(e.target.value))}
        sx={{ display: { tablet: 'none' } }}
      >
        {packagingOptions.map((opt) => (
          <MenuItem key={opt.id} value={opt.id}>
            {opt.name}
          </MenuItem>
        ))}
      </Select>

      <Box
        sx={{
          display: { xs: 'none', tablet: 'flex' },
          flexDirection: { tablet: 'column' },
        }}
        gap={4}
      >
        <Typography>Packaging Type</Typography>

        <Box display="flex" flexWrap="wrap" gap={2}>
          {packagingOptions.map((opt) => (
            <Chip
              key={opt.id}
              label={opt.name}
              variant={selectedWrap === opt.id ? 'filled' : 'outlined'}
              onClick={() => onWrapChange(opt.id)}
              clickable
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
