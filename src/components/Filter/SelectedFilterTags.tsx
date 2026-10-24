import { filterConfig } from '@/config/filterConfig';
import { useFilters } from '@/hooks/useFilters';
import { capitalize } from '@/utils/capitalize';
import { isAnyFilter } from '@/utils/productFilters';
import { Box, Chip, Divider } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { ButtonText } from '../common/ButtonText';
import type { FiltersData } from './Filter';

export function SelectedFilterTags({
  likeAccordion,
  filtersData,
}: {
  likeAccordion?: boolean;
  filtersData: FiltersData;
}) {
  const [, setSearchParams] = useSearchParams();

  const clearFilters = () => {
    setSearchParams('page=1');
  };

  const removeFilter = (
    filterType: 'range' | 'checkbox' | 'toggle',
    key: string,
    value?: string | number
  ) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      const capitalizedKey = capitalize(key);

      if (filterType === 'range') {
        params.delete(`min${capitalizedKey}`);
        params.delete(`max${capitalizedKey}`);
      } else if (value != null) {
        const values = params
          .get(key)
          ?.split(',')
          .filter((item) => item !== String(value));

        if (values?.length) {
          params.set(key, values.join(','));
        } else {
          params.delete(key);
        }
      }

      return params;
    });
  };
  const filters = useFilters();
  const hasActiveFilters = isAnyFilter(filters);

  return (
    <>
      {hasActiveFilters && (
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexWrap="wrap" gap="12px" p={likeAccordion ? '16px' : '0px'}>
            {filterConfig.map((item) => {
              switch (item.type) {
                case 'range': {
                  const minValue = filters[item.key].min;
                  const maxValue = filters[item.key].max;
                  const { min: minLimit, max: maxLimit } = filtersData[item.key];

                  if (minValue == null && maxValue == null) return null;
                  return (
                    <Chip
                      key={item.key}
                      label={item.format(minValue ?? minLimit, maxValue ?? maxLimit)}
                      clickable
                      onDelete={() => removeFilter(item.type, item.key)}
                    />
                  );
                }
                case 'checkbox': {
                  const valueList = filters[item.key];
                  if (valueList.length === 0) return null;
                  return valueList.map((id) => {
                    const option = filtersData[item.key].find((item) => item.id === id);

                    if (!option) return null;

                    return (
                      <Chip
                        key={`${item.key}-${id}`}
                        label={option.name}
                        clickable
                        onDelete={() => removeFilter(item.type, item.key, id)}
                      />
                    );
                  });
                }
                case 'toggle': {
                  const valueList = filters[item.key];
                  if (valueList.length === 0) return null;
                  return valueList.map((keyWord) => {
                    const option = filtersData[item.key].find((item) => item.value === keyWord);

                    if (!option) return null;

                    return (
                      <Chip
                        key={`${item.key}-${keyWord}`}
                        label={option.label}
                        clickable
                        onDelete={() => removeFilter(item.type, item.key, keyWord)}
                      />
                    );
                  });
                }
              }
            })}

            <ButtonText onClick={clearFilters}>Clear all</ButtonText>
          </Box>
          {likeAccordion && <Divider />}
        </Box>
      )}
    </>
  );
}
