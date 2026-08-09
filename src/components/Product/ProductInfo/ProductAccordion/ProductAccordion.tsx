import type { BouquetType } from '@/types/product';
import { Box } from '@mui/material';
import { AboutFlower } from './AboutFlower';
import { CareFlower } from './CareFlower';
import { DeliveryFlower } from './DeliveryFlower';

export function ProductAccordion({
  description,
  type,
  title,
}: {
  description: string;
  type: BouquetType;
  title: string;
}) {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <AboutFlower description={description} />
      <CareFlower type={type} flowerTitle={title} />
      <DeliveryFlower />
    </Box>
  );
}
