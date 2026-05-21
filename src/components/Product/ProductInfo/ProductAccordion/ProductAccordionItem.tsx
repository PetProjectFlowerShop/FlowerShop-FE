import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import type { ReactNode } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function ProductAccordionItem({ title, children }: { title: string; children: ReactNode }) {
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
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          paddingX: 4,
          minHeight: '40px',
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

      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
