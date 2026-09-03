import { CustomSelect } from '@/components/common/CustomSelect';
import type { PackagingType } from '@/types/product';
import { Box, Chip, Typography, type SelectChangeEvent } from '@mui/material';

type ProductWrapSelectProps = {
  value: PackagingType;
  options: PackagingType[];
  onChange: (value: PackagingType) => void;
};

export function ProductWrapSelect({ value, options, onChange }: ProductWrapSelectProps) {
  const selectOptions = options.map((option) => ({
    value: String(option.id),
    label: option.name,
  }));

  const handleSelectChange = (event: SelectChangeEvent) => {
    handleOptionChange(event.target.value);
  };

  const handleOptionChange = (id: string) => {
    const selectedOption = options.find((option) => String(option.id) === id);

    if (selectedOption) {
      onChange(selectedOption);
    }
  };
  return (
    <>
      <CustomSelect
        value={String(value.id)}
        options={selectOptions}
        onChange={handleSelectChange}
        sx={{ display: { tablet: 'none' } }}
      />

      <Box
        sx={{
          display: { xs: 'none', tablet: 'flex' },
          flexDirection: { tablet: 'column' },
        }}
        gap={4}
      >
        <Typography>Packaging Type</Typography>

        <Box display="flex" flexWrap="wrap" gap={2}>
          {selectOptions.map((opt) => (
            <Chip
              key={opt.value}
              label={opt.label}
              variant={value.id === Number(opt.value) ? 'filled' : 'outlined'}

              onClick={() => handleOptionChange(opt.value)}
              clickable
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
