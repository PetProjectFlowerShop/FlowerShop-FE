import { MenuItem, Select, type SelectChangeEvent } from '@mui/material';

import { useSearchParams } from 'react-router-dom';
import type { SortOption } from '../../types/sort';
import { SORT_OPTIONS } from '../../constants/sort';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = (searchParams.get('sort') as SortOption) || 'top';

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as SortOption;
    const newParams = new URLSearchParams(searchParams);
    if (value === 'top') {
      newParams.delete('sort');
    } else {
      newParams.set('sort', value);
    }
    newParams.set('page', '1');
    setSearchParams(newParams);
  };
  return (
    <Select
      value={sort}
      onChange={handleChange}
      IconComponent={KeyboardArrowDownIcon}
      sx={{
        lineHeight: 1.5,
        borderRadius: 3,
        padding: '0px 20px',
        '& .MuiSelect-select': {
          display: 'flex',
          alignItems: 'center',
          fontSize: '16px',
          minHeight: '20px',
          maxHeight: '56px',
        },
        '& .MuiSelect-select.MuiOutlinedInput-input': {
          pr: 6,
          pl: 0,
          py: '18px',
        },
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'primary.main',
          borderWidth: 2,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderWidth: 2,
        },
        '.MuiSelect-icon': {
          right: 20,
          fontSize: 24,
        },
      }}
    >
      {SORT_OPTIONS.map((opt) => (
        <MenuItem key={opt.value} value={opt.value} sx={{ padding: '4px 23px' }}>
          {opt.label}
        </MenuItem>
      ))}
    </Select>
  );
}
