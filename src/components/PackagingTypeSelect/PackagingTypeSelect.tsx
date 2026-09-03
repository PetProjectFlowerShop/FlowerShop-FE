import type { PackagingType } from '@/types/product';
import type { SelectChangeEvent } from '@mui/material';
import { CustomSelect } from '../common/CustomSelect';

type PackagingTypeSelectProps = {
  value: PackagingType;
  options: PackagingType[];
  onChange: (value: PackagingType) => void;
};

export function PackagingTypeSelect({ value, options, onChange }: PackagingTypeSelectProps) {
  console.log(' available options', options);
  const selectOptions = options.map((option) => ({
    value: String(option.id),
    label: option.name,
  }));

  const handleChange = (event: SelectChangeEvent) => {
    const selectedOption = options.find((option) => String(option.id) === event.target.value);

    if (selectedOption) {
      onChange(selectedOption);
    }
  };
  console.log(selectOptions);

  return <CustomSelect value={String(value.id)} options={selectOptions} onChange={handleChange} />;
}
