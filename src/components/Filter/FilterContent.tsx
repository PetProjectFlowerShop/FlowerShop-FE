import CloseIcon from '@mui/icons-material/Close';

import { filterConfig } from '@/config/filterConfig';
import { useCatalogParams } from '@/hooks/useCatalogParams';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import type { FiltersData } from './Filter';
import { SelectedFilterTags } from './SelectedFilterTags/SelectedFilterTags';
import { CheckboxFilterSection } from './sections/CheckboxFilterSection';
import { RangeFilterSection } from './sections/RangeFilterSection';
import { ToggleFilterSection } from './sections/ToggleFilterSection';

type FilterContentProps = {
  filtersData: FiltersData;
  setIsFilterOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  showTags?: boolean;
  defaultExpanded?: boolean;
};

export function FilterContent({
  filtersData,
  setIsFilterOpen,
  showTags = false,
  defaultExpanded = false,
}: FilterContentProps) {
  const [searchParams] = useSearchParams();
  const { toggleParam, setRangeParam } = useCatalogParams();

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
        px={4}
        pl={{ desktop: 0 }}
      >
        <Typography variant="h4">Filters</Typography>
        <IconButton
          sx={{ width: 40, height: 40, display: { desktop: 'none' } }}
          variant="default"
          onClick={() => setIsFilterOpen?.(false)}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 306,
          width: '100%',
        }}
      >
        <Box
          sx={{
            pr: 1,
            display: 'flex',
            flexDirection: 'column',
            mt: 2,
            gap: 6,
            minWidth: 0,
            overflowX: 'hidden',
            height: '100%',
          }}
        >
          {showTags && <SelectedFilterTags filtersData={filtersData} likeAccordion />}
          {filterConfig.map((item) => {
            switch (item.type) {
              case 'checkbox': {
                const options = filtersData[item.key];

                if (options.length === 0) {
                  return null;
                }

                return (
                  <CheckboxFilterSection
                    key={item.key}
                    filterKey={item.key}
                    title={item.name}
                    options={options}
                    selectedValuesParam={searchParams.get(item.key) ?? ''}
                    onToggle={toggleParam}
                    defaultExpanded={defaultExpanded}
                  />
                );
              }
              case 'range': {
                const { min: minLimit, max: maxLimit } = filtersData[item.key];

                const paramPrefix = item.key.charAt(0).toUpperCase() + item.key.slice(1);

                const selectedMin = Number(searchParams.get(`min${paramPrefix}`) ?? minLimit);
                const selectedMax = Number(searchParams.get(`max${paramPrefix}`) ?? maxLimit);

                return (
                  <RangeFilterSection
                    key={item.key}
                    title={item.name}
                    filterKey={item.key}
                    minLimit={minLimit}
                    maxLimit={maxLimit}
                    initialRange={[selectedMin, selectedMax]}
                    minDistance={20}
                    onChangeCommitted={setRangeParam}
                    defaultExpanded={defaultExpanded}
                  />
                );
              }
              case 'toggle': {
                const options = filtersData[item.key];

                if (options.length === 0) {
                  return null;
                }
                return (
                  <ToggleFilterSection
                    key={item.key}
                    title={item.name}
                    filterKey={item.key}
                    options={options}
                    selectedValuesParam={searchParams.get(item.key) ?? ''}
                    defaultExpanded={defaultExpanded}
                    onToggle={toggleParam}
                  />
                );
              }
            }
          })}
        </Box>
      </Box>
    </>
  );
}
