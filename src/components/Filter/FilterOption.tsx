import { Checkbox, FormControlLabel } from '@mui/material';
import type { ReactNode } from 'react';

type FilterOptionProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: ReactNode;
};

export function FilterOption({ checked, onChange, label }: FilterOptionProps) {
  return (
    <FormControlLabel
      checked={checked}
      onChange={(_, checked) => onChange(checked)}
      sx={{
        width: '100%',
        alignItems: 'center',
        gap: 0,
        margin: 0,
        '& .MuiFormControlLabel-label': {
          flex: 1,
        },
      }}
      control={<Checkbox />}
      label={label}
    />
  );
}
