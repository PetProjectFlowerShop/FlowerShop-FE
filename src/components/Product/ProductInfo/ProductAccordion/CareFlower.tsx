import { AccordionDetails, List, Typography } from '@mui/material';
import type { FlowerType } from '../../../../types/product';
import { ProductAccordionItem } from './ProductAccordionItem';

const CARE_BY_TYPE: Record<string, string[]> = {
  default: [
    'Trim the stems at a 45° angle before placing them in water to improve water absorption.',
    'Use a clean vase filled with fresh, cool water and change the water every 1–2 days.',
    'Remove any leaves that sit below the waterline to keep the water clear and fresh.',
    'Keep the bouquet away from direct sunlight, heaters, and drafts.',
    'Place the flowers in a cool, shaded spot to help the blooms stay soft and fresh longer.',
    'With gentle care, the Powder Rose Spray will maintain its delicate color and graceful shape for days, bringing a calm, romantic mood to your space.',
  ],
};

export function CareFlower({ title }: { type: FlowerType[]; title: string }) {
  const items = CARE_BY_TYPE.default; //for now, default
  return (
    <ProductAccordionItem title="Care">
      <AccordionDetails
        sx={{
          px: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="h4" sx={{ opacity: 0.6 }}>
          How to Care for Your {title}
        </Typography>
        <List sx={{ p: 0 }}>
          {items.map((text, index) => {
            const isLast = index === items.length - 1;
            return (
              <Typography component="li" sx={{ mt: isLast ? 2 : 0 }}>
                {!isLast && '• '}
                {text}
              </Typography>
            );
          })}
        </List>
      </AccordionDetails>
    </ProductAccordionItem>
  );
}
