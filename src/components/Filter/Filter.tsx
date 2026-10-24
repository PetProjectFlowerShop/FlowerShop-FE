import type { NumberStem, RangeType } from '@/config/staticFilters';
import type { ProductFilters } from '@/types/product';
import { Box, Button, Divider, Drawer } from '@mui/material';
import { useState } from 'react';
import { FilterContent } from './FilterContent';

export type FiltersData = ProductFilters & {
  price: RangeType;
  height: RangeType;
  numberStems: NumberStem[];
};

type FilterProps = {
  filtersData: FiltersData;
};

export function Filter({ filtersData }: FilterProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setIsFilterOpen(true)} fullWidth>
        Filters
      </Button>
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            width: 320,
            borderRadius: 0,
            boxShadow: 'none',
          },
        }}
        anchor="left"
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      >
        <FilterContent showTags filtersData={filtersData} setIsFilterOpen={setIsFilterOpen} />

        <Box mt="auto">
          <Divider />
          <Box sx={{ p: '16px' }}>
            <Button variant="contained" fullWidth onClick={() => setIsFilterOpen(false)}>
              View Items
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
