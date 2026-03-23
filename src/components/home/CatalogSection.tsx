import { Container } from '@mui/material';
import { CustomSection } from '../common/CustomSection';
import { SectionHeader } from '../common/SectionHeader';
import { ProductCarousel } from '../common/ProductCarousel';
import type { Product } from '../common/ProductCard';
import { CatalogBanner } from './CatalogBanner';

const sampleProducts: Product[] = [
  {
    id: '1',
    title: 'Velvet Sunset Bouquet',
    imgURL: '',
    price: 120,
    discount: 15,
    isFavorite: true,
    tags: ['Popular'],
  },
  {
    id: '2',
    title: 'Lavender Dream',
    imgURL: '',
    price: 85,
    isFavorite: false,
    tags: ['Season offer'],
  },
  {
    id: '3',
    title: 'Golden Hour Arrangement',
    imgURL: '',
    price: 110,
    isFavorite: false,
    tags: ['New'],
  },
  {
    id: '4',
    title: 'Blush Peony Delight',
    imgURL: '',
    price: 95,
    discount: 10,
    isFavorite: true,
    tags: ['Popular', 'New'],
  },
  {
    id: '5',
    title: 'Wild Meadow Mix',
    imgURL: '',
    price: 70,
    isFavorite: false,
    tags: ['Season offer'],
  },
  {
    id: '6',
    title: 'Classic White Roses',
    imgURL: '',
    price: 65,
    discount: 5,
    isFavorite: false,
    tags: ['New'],
  },
  {
    id: '7',
    title: 'Sunrise Tulip Bundle',
    imgURL: '',
    price: 78,
    isFavorite: true,
    tags: ['Popular'],
  },
  {
    id: '8',
    title: 'Eucalyptus Serenity',
    imgURL: '',
    price: 88,
    discount: 12,
    isFavorite: false,
    tags: ['Season offer', 'New'],
  },
];

export default function CatalogSection() {
  return (
    <CustomSection>
      <Container>
        <SectionHeader title="Catalog" subtitle="Explore our beautiful bouquets" />

        <ProductCarousel products={sampleProducts} />
        <CatalogBanner />
      </Container>
    </CustomSection>
  );
}
