import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import type { ReactNode } from 'react';

type FilterSectionProps = {
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
};

export function FilterSection({ title, children, defaultExpanded = false }: FilterSectionProps) {
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

          '& .MuiAccordionSummary-content': {
            my: '8px',
          },
          '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: 0,
          },
          '&.Mui-expanded': {
            minHeight: '40px',
          },
        }}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ padding: 4, paddingTop: 2, gap: 1, display: 'flex', flexDirection: 'column' }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
