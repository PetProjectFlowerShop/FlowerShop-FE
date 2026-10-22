import type { CheckboxFilterKey } from '@/config/filterConfig';
import { memo } from 'react';
import { FilterOption } from './FilterOption';
import { FilterSection } from './FilterSection';

type CheckboxOption = {
  id: number;
  name: string;
};

type CheckboxFilterSectionProps = {
  title: string;
  filterKey: CheckboxFilterKey;
  options: CheckboxOption[];
  selectedValuesParam: string;
  onToggle: (key: CheckboxFilterKey, value: string) => void;
  defaultExpanded: boolean;
};

export const CheckboxFilterSection = memo(function CheckboxFilterSection({
  title,
  filterKey,
  options,
  selectedValuesParam,
  onToggle,
  defaultExpanded,
}: CheckboxFilterSectionProps) {
  const selectedValues = selectedValuesParam ? selectedValuesParam.split(',').map(Number) : [];
  return (
    <FilterSection title={title} defaultExpanded={defaultExpanded}>
      {options.map((option) => {
        const isChecked = selectedValues.includes(option.id);

        return (
          <FilterOption
            key={option.id}
            checked={isChecked}
            onChange={() => onToggle(filterKey, String(option.id))}
            label={option.name}
          />
        );
      })}
    </FilterSection>
  );
});
