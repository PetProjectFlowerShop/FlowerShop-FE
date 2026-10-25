import { CustomSelect } from '@/components/common/CustomSelect';
import { SORT_OPTIONS, type SortOption } from '@/constants/sort';
import { useSearchParams } from 'react-router-dom';

export function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = (searchParams.get('sort') ?? 'top') as SortOption;

  const handleSortChange = (value: SortOption) => {
    setSearchParams((prev) => {
      prev.set('sort', value);
      prev.set('page', '1');
      return prev;
    });
  };

  return (
    <CustomSelect
      value={sort}
      options={SORT_OPTIONS}
      onChange={(e) => handleSortChange(e.target.value as SortOption)}
    />
  );
}
