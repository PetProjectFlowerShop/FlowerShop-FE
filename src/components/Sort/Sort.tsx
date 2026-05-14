import { MenuItem, Select, type SelectChangeEvent } from '@mui/material';

import { useSearchParams } from 'react-router-dom';
import type { SortOption } from '../../types/sort';
import { SORT_OPTIONS } from '../../constants/sort';

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
    setSearchParams(newParams);
  };
  return (
    <Select value={sort} onChange={handleChange}>
      {SORT_OPTIONS.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </Select>
  );
}
