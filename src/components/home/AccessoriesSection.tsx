import { Container } from '@mui/material';
import { CustomSection } from '../common/CustomSection';
import { SectionHeader } from '../common/SectionHeader';
import { AccessoriesCarousel } from '../common/AccessoriesCarousel';
import accessories from '@/assets/images/accessories.webp';

const MOCK_ACCESSORIES = [
  { id: '1', title: 'Vase Perfeqta', price: 28, imgURL: accessories },
  { id: '2', title: 'Candle Floria', price: 23, imgURL: accessories },
  { id: '3', title: 'Flori Frame', price: 12, imgURL: accessories },
  { id: '4', title: 'Rosie Candle', price: 18, imgURL: accessories },
  { id: '5', title: 'Aroma Stick', price: 15, imgURL: accessories },
];

export default function AccessoriesSection() {
  return (
    <CustomSection data-testid="accessories-section">
      <Container>
        <SectionHeader extratitle="Add Accessories" />
        <AccessoriesCarousel accessories={MOCK_ACCESSORIES} />
      </Container>
    </CustomSection>
  );
}
