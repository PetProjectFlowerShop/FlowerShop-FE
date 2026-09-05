import { useSearchParams } from 'react-router-dom';
import type { SortOption } from '@/types/sort';
import { SORT_OPTIONS } from '@/constants/sort';
import { CustomSelect } from '@/components/common/CustomSelect';
import { type SelectChangeEvent } from '@mui/material';

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

  return <CustomSelect value={sort} options={SORT_OPTIONS} onChange={handleChange} />;
}
