import { AccordionDetails, Typography } from '@mui/material';
import { ProductAccordionItem } from './ProductAccordionItem';

export function AboutFlower({ description }: { description: string }) {
  const descriptionParts = description.match(/[^.]+[.!?]?/g) ?? [];

  return (
    <ProductAccordionItem title="About the Flower">
      <AccordionDetails
        sx={{
          px: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {descriptionParts.map((part, index) => (
          <Typography key={index}>{part.trim()}</Typography>
        ))}
      </AccordionDetails>
    </ProductAccordionItem>
  );
}
