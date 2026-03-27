import { Box } from '@mui/material';
import advantage1 from '../../../assets/images/advantage-1.png';
import advantage2 from '../../../assets/images/advantage-2.png';
import advantage3 from '../../../assets/images/advantage-3.png';
import advantage4 from '../../../assets/images/advantage-4.png';
import { AdvantageCard, type AdvantageCardProps } from './AdvantageCard';

const advantageCards: AdvantageCardProps[] = [
  {
    img: advantage1,
    title: 'Freshness Guaranteed',
    text: 'Hand-picked flowers for vibrant, long-lasting bouquets.',
  },
  {
    img: advantage2,
    title: 'Personalized Service',
    text: 'Custom bouquets and personal touches for any occasion.',
  },
  {
    img: advantage3,
    title: 'Reliable Delivery',
    text: 'Hand-picked flowers for vibrant, long-lasting bouquets.',
  },
  {
    img: advantage4,
    title: 'Unique Designs',
    text: 'Creative arrangements with colors and textures you want.',
  },
];

export function AdvantageList() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr 1fr', lg: 'repeat(4, 1fr)' },
        justifyContent: 'center', // центр всього гріда
        justifyItems: 'center',
        gap: { xs: 4, md: 6 },
      }}
    >
      {advantageCards.map((card, index) => (
        <AdvantageCard key={index} {...card} />
      ))}
    </Box>
  );
}
