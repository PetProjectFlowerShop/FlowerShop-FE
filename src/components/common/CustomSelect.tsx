import { MenuItem, Select, Typography } from '@mui/material';
import type { SelectChangeEvent, SxProps } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import type { Theme } from '@emotion/react';

interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  options: SelectOption[];
  onChange: (event: SelectChangeEvent) => void;
  size?: 'small' | 'normal';
  sx?: SxProps<Theme>;
}

export const CustomSelect = ({
  value,
  options,
  onChange,
  size = 'normal',
  sx,
}: CustomSelectProps) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      IconComponent={KeyboardArrowDownIcon}
      sx={{
        lineHeight: size === 'small' ? 1.4 : 1.5,
        borderRadius: 3,
        padding: size === 'small' ? '0px 12px' : '0px 20px',
        '& .MuiSelect-select': {
          display: 'flex',
          alignItems: 'center',
          fontSize: '16px',
          minHeight: '20px',
          maxHeight: size === 'small' ? '44px' : '56px',
        },
        '& .MuiSelect-select.MuiOutlinedInput-input': {
          pr: 6,
          pl: 0,
          py: '18px',
        },
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'primary.main',
          borderWidth: size === 'small' ? 1 : 2,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderWidth: size === 'small' ? 1 : 2,
        },
        '.MuiSelect-icon': {
          right: size === 'small' ? 12 : 20,
          fontSize: 24,
        },
        ...sx,
      }}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          sx={{ padding: size === 'small' ? '4px 12px' : '4px 23px' }}
        >
          <Typography>{option.label}</Typography>
        </MenuItem>
      ))}
    </Select>
  );
};
