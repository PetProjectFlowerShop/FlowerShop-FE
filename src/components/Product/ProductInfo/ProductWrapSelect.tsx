import { Box, Chip, MenuItem, Select, Typography } from '@mui/material';
import { PRODUCT_WRAP_OPTIONS } from '../../../constants/productWrap';
import type { PackagingType } from '../../../types/product';

export function ProductWrapSelect({ packagingOptions }: { packagingOptions: PackagingType[] }) {
  const filteredOptions = packagingOptions.map((p) => ({
    key: p.key,
    label: PRODUCT_WRAP_OPTIONS[p.key],
  }));

  const defaultKey = filteredOptions[0]?.key;
  return (
    <>
      <Select defaultValue={defaultKey ?? ''} sx={{ display: { tablet: 'none' } }}>
        {filteredOptions.map((opt) => (
          <MenuItem key={opt.key} value={opt.key}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
      <Box
        sx={{ display: { xs: 'none', tablet: 'flex' }, flexDirection: { tablet: 'column' } }}
        gap={4}
      >
        <Typography>Packaging Type</Typography>
        <Box display="flex" flexWrap="wrap" gap={2}>
          {filteredOptions.map((opt) => (
            <Chip key={opt.key} label={opt.label} />
          ))}
        </Box>
      </Box>
    </>
  );
}
