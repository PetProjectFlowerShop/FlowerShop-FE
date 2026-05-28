import { Box, Chip } from '@mui/material';
import type { FilterConfigType } from '@/constants/filterConfig';
import type { FilterKey, FiltersState, NumberFilterKey } from '@/types/filter';
import { FilterOption } from './FilterOption';
import { FilterSection } from './FilterSection';
import { RangeFilterSection } from './RangeFilterSection';
import { ColorLabel } from './ColorLabel';

type Props = {
  config: FilterConfigType;
  filters: FiltersState;
  toggleParam: (key: FilterKey, value: string) => void;
  setRange: (
    minKey: NumberFilterKey,
    maxKey: NumberFilterKey,
    min: number,
    max: number,
    defaultMin: number,
    defaultMax: number
  ) => void;
  defaultExpanded?: boolean;
};

export function FilterRenderer({ config, filters, toggleParam, setRange, defaultExpanded }: Props) {
  return (
    <>
      {config.map((item) => {
        switch (item.type) {
          case 'checkbox':
            return (
              <FilterSection
                key={item.paramKey}
                title={item.title}
                defaultExpanded={defaultExpanded}
              >
                {item.options.map((option) => {
                  const values = filters[item.paramKey] as string[];
                  const isChecked = values.includes(option.value);

                  return (
                    <FilterOption
                      key={option.value}
                      checked={isChecked}
                      onChange={() => toggleParam(item.paramKey, option.value)}
                      label={
                        item.paramKey === 'color' ? <ColorLabel option={option} /> : option.label
                      }
                    />
                  );
                })}
              </FilterSection>
            );

          case 'range': {
            const rangeValue: [number, number] = [
              filters[item.minKey] ?? item.min,
              filters[item.maxKey] ?? item.max,
            ];
            return (
              <RangeFilterSection
                key={item.minKey}
                title={item.title}
                min={item.min}
                max={item.max}
                minDistance={item.minDistance}
                marks={item.marks}
                value={rangeValue}
                onChange={([min, max]) =>
                  setRange(item.minKey, item.maxKey, min, max, item.min, item.max)
                }
                defaultExpanded={defaultExpanded}
              />
            );
          }

          case 'toggle':
            return (
              <FilterSection key={item.paramKey} title={item.title}>
                <Box key={item.paramKey} sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {item.options.map((option) => {
                    const selected = filters[item.paramKey].includes(option.value);
                    return (
                      <Chip
                        key={option.value}
                        label={option.value}
                        clickable
                        variant={selected ? 'filled' : 'outlined'}
                        onClick={() => toggleParam(item.paramKey, option.value)}
                      />
                    );
                  })}
                </Box>
              </FilterSection>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
