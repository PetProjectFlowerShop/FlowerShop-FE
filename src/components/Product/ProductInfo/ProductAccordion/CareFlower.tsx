import { getCareItems } from '@/constants/flower-care';
import { AccordionDetails, List, Typography } from '@mui/material';
import { ProductAccordionItem } from './ProductAccordionItem';
import type { BouquetType } from '@/types/product';

export function CareFlower({ type, flowerTitle }: { type: BouquetType; flowerTitle: string }) {
  const items = getCareItems(type);
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
          How to Care for Your {flowerTitle}
        </Typography>
        <List
          disablePadding
          sx={{
            listStyle: 'none',
          }}
        >
          {items.map((text, index) => {
            const isLast = index === items.length - 1;
            return (
              <Typography key={`${index}-${text}`} component="li" sx={{ mt: isLast ? 2 : 0 }}>
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
