import { Box } from '@mui/material';
import advantage1 from '@/assets/images/advantage-1.webp';
import advantage2 from '@/assets/images/advantage-2.webp';
import advantage3 from '@/assets/images/advantage-3.webp';
import advantage4 from '@/assets/images/advantage-4.webp';
import { AdvantageCard, type AdvantageCardProps } from './AdvantageCard';

const advantageCards: AdvantageCardProps[] = [
  {
    img: advantage1,
    title: 'Freshness Guaranteed',
    text: 'Hand-picked flowers for vibrant, long-lasting bouquets.',
  },
  {
    img: advantage4,
    title: 'Personalized Service',
    text: 'Custom bouquets and personal touches for any occasion.',
  },
  {
    img: advantage2,
    title: 'Reliable Delivery',
    text: 'Hand-picked flowers for vibrant, long-lasting bouquets.',
  },
  {
    img: advantage3,
    title: 'Unique Designs',
    text: 'Creative arrangements with colors and textures you want.',
  },
];

export function AdvantageList() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr 1fr', desktop: 'repeat(4, 1fr)' },
        justifyContent: 'center',
        justifyItems: 'center',
        columnGap: { xs: 4, tablet: 6 },
        rowGap: { xs: 2 },
        paddingBottom: 1,
      }}
    >
      {advantageCards.map((card, index) => (
        <AdvantageCard key={index} {...card} />
      ))}
    </Box>
  );
}
