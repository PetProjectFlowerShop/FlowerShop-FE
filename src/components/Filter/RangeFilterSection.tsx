import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Slider,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { theme } from '@/theme';

type RangeFilterSectionProps = {
  title: string;
  min: number;
  max: number;
  value: [number, number];
  minDistance?: number;
  step?: number;
  marks?: { value: number }[];
  onChange: (value: [number, number]) => void;
  defaultExpanded?: boolean;
};
export function RangeFilterSection({
  title,
  min,
  max,
  value,
  minDistance = 0,
  marks,
  onChange,
  defaultExpanded = false,
}: RangeFilterSectionProps) {
  const [minVal, maxVal] = value;
  const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    if (!Array.isArray(newValue)) return;

    const [newMin, newMax] = newValue;

    if (newMax - newMin < minDistance) return;

    onChange([newMin, newMax]);
  };
  const handleMinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    const clamped = clamp(val, min, maxVal - minDistance);

    onChange([clamped, maxVal]);
  };

  const handleMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    const clamped = clamp(val, minVal + minDistance, max);

    onChange([minVal, clamped]);
  };
  return (
    <Accordion
      square
      sx={{
        borderRadius: 0,
        borderBottom: '1px solid',
        borderColor: 'divider',
        '&::before': { display: 'none' },
        '&.MuiPaper-root': {
          borderRadius: 0,
          backgroundColor: 'transparent',
        },
        '&.Mui-expanded': {
          margin: 0,
        },
      }}
      elevation={0}
      defaultExpanded={defaultExpanded}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
        sx={{
          paddingX: 4,

          '& .MuiAccordionSummary-content': { marginY: 2 },
          '&.Mui-expanded': {
            minHeight: '40px',
          },
        }}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ padding: 4, paddingTop: 2, display: 'flex', flexDirection: 'column' }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Typography>From</Typography>
          <TextField value={minVal} size="small" type="number" onChange={handleMinInput} />
          <Typography>To</Typography>
          <TextField value={maxVal} size="small" type="number" onChange={handleMaxInput} />
        </Box>
        <Slider
          sx={{
            width: '100%',
            '& .MuiSlider-rail': {
              height: 4,
            },
            '& .MuiSlider-track': {
              height: 6,
            },
            '& .MuiSlider-mark': {
              backgroundColor: theme.palette.primary.main,
            },
            '& .MuiSlider-markActive': {
              backgroundColor: 'white',
            },
          }}
          min={min}
          max={max}
          marks={marks}
          aria-labelledby="input-slider"
          value={value}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          disableSwap
        />
      </AccordionDetails>
    </Accordion>
  );
}
