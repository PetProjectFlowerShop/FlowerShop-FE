import type { RangeFilterKey } from '@/config/filterConfig';
import { theme } from '@/theme';
import { Box, Slider, TextField, Typography } from '@mui/material';
import { memo, useMemo, useState, type ChangeEvent } from 'react';
import { FilterSection } from './FilterSection';

type RangeFilterSectionProps = {
  title: string;
  minLimit: number;
  maxLimit: number;
  filterKey: RangeFilterKey;
  minDistance?: number;
  onChangeCommitted?: (
    key: RangeFilterKey,
    min: number,
    max: number,
    minLimit: number,
    maxLimit: number
  ) => void;
  step?: number;
  initialRange: [number, number];
  defaultExpanded?: boolean;
};
export const RangeFilterSection = memo(function RangeFilterSection({
  title,
  minLimit,
  maxLimit,
  initialRange,
  minDistance = 0,
  filterKey,
  step,
  onChangeCommitted,
  defaultExpanded,
}: RangeFilterSectionProps) {
  const [range, setRange] = useState<[number, number]>(initialRange);
  const [prevInitialRange, setPrevInitialRange] = useState(initialRange);

  if (prevInitialRange[0] !== initialRange[0] || prevInitialRange[1] !== initialRange[1]) {
    setPrevInitialRange(initialRange);
    setRange(initialRange);
  }

  const [minVal, maxVal] = range;
  const generatedMarks = useMemo(() => {
    if (maxLimit <= minLimit) return [];

    const marksCount = 5;
    const step = (maxLimit - minLimit) / marksCount;

    return Array.from({ length: marksCount + 1 }, (_, index) => ({
      value: Math.round(minLimit + step * index),
    }));
  }, [minLimit, maxLimit]);

  const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    if (!Array.isArray(newValue)) return;

    const [newMin, newMax] = newValue;

    if (newMax - newMin < minDistance) return;

    setRange([newMin, newMax]);
  };

  const handleMinInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return;

    const val = Number(e.target.value);
    const clamped = clamp(val, minLimit, maxVal - minDistance);

    setRange([clamped, maxVal]);
  };

  const handleMaxInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return;

    const val = Number(e.target.value);
    const clamped = clamp(val, minVal + minDistance, maxLimit);

    setRange([minVal, clamped]);
  };

  const commitRange = (value: number | number[]) => {
    if (!Array.isArray(value)) return;

    onChangeCommitted?.(filterKey, value[0], value[1], minLimit, maxLimit);
  };
  return (
    <FilterSection title={title} defaultExpanded={defaultExpanded}>
      <>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Typography>From</Typography>
          <TextField
            value={minVal}
            size="small"
            type="number"
            onChange={handleMinInput}
            slotProps={{ htmlInput: { min: minLimit, max: maxVal - minDistance } }}
          />

          <Typography>To</Typography>
          <TextField
            value={maxVal}
            size="small"
            type="number"
            onChange={handleMaxInput}
            slotProps={{ htmlInput: { min: minVal + minDistance, max: maxLimit } }}
          />
        </Box>

        <Slider
          sx={{
            width: '100%',
            '& .MuiSlider-rail': { height: 4 },
            '& .MuiSlider-track': { height: 6 },
            '& .MuiSlider-mark': {
              backgroundColor: theme.palette.primary.main,
            },
            '& .MuiSlider-markActive': { backgroundColor: 'white' },
          }}
          min={minLimit}
          max={maxLimit}
          step={step}
          marks={generatedMarks}
          value={range}
          onChange={handleSliderChange}
          onChangeCommitted={(_, value) => commitRange(value)}
          valueLabelDisplay="auto"
          disableSwap
        />
      </>
    </FilterSection>
  );
});
