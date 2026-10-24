import { memo } from 'react';
import { Box, Chip } from '@mui/material';
import type { ToggleFilterKey } from '@/config/filterConfig';
import { FilterSection } from './FilterSection';

type ToggleOption = {
  value: string;
  label: string;
};

type ToggleFilterSectionProps = {
  title: string;
  filterKey: ToggleFilterKey;
  options: ToggleOption[];
  selectedValuesParam: string;
  onToggle: (key: ToggleFilterKey, value: string) => void;
  defaultExpanded: boolean;
};

export const ToggleFilterSection = memo(function ToggleFilterSection({
  filterKey,
  title,
  options,
  onToggle,
  selectedValuesParam,
  defaultExpanded,
}: ToggleFilterSectionProps) {
  const selectedValues = selectedValuesParam ? selectedValuesParam.split(',') : [];
  return (
    <FilterSection title={title} defaultExpanded={defaultExpanded}>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {options.map((option) => {
          const isSelected = selectedValues.includes(option.value);
          return (
            <Chip
              key={option.value}
              label={option.label}
              clickable
              variant={isSelected ? 'filled' : 'outlined'}
              onClick={() => {
                onToggle(filterKey, option.value);
              }}
            />
          );
        })}
      </Box>
    </FilterSection>
  );
});
