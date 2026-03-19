import { Container } from '@mui/material';
import { CustomSection } from '../common/CustomSection';
import { SectionHeader } from '../common/SectionHeader';
import { ProductCarousel } from '../common/ProductCarousel';
import type { Product } from '../common/ProductCard';

const sampleProducts: Product[] = [
  {
    id: '1',
    title: 'A Moment in Bloom',
    imgURL: '',
    price: 98,
    discount: 20,
    isFavorite: false,
    tags: ['Popular'],
  },
  {
    id: '2',
    title: 'Soft Morning Bloom',
    imgURL: '',
    price: 103,
    isFavorite: true,
    tags: ['Season offer'],
  },
  {
    id: '3',
    title: 'Silent Elegance',
    imgURL: '',
    price: 92,
    isFavorite: false,
    tags: ['New'],
  },
  {
    id: '4',
    title: 'Garden Reverie',
    imgURL: '',
    price: 112,
    discount: 15,
    isFavorite: false,
    tags: ['Popular', 'New'],
  },
  {
    id: '5',
    title: 'Peony & Lisianthus',
    imgURL: '',
    price: 73,
    isFavorite: false,
    tags: ['Season offer'],
  },
  {
    id: '6',
    title: 'Pastel Rose Mix',
    imgURL: '',
    price: 50,
    discount: 10,
    isFavorite: true,
    tags: ['New'],
  },
  {
    id: '7',
    title: 'Peony & Lisianthus',
    imgURL: '',
    price: 73,
    isFavorite: false,
    tags: ['Season offer'],
  },
  {
    id: '8',
    title: 'Pastel Rose Mix',
    imgURL: '',
    price: 50,
    discount: 10,
    isFavorite: true,
    tags: ['New'],
  },
];

export default function RecommendedSection() {
  return (
    <CustomSection>
      <Container>
        <SectionHeader title="Our recommended" subtitle="Perfect for special moments" />

        <ProductCarousel products={sampleProducts} />
      </Container>
    </CustomSection>
  );
}
