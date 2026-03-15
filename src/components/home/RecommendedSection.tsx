import { Container, Typography } from '@mui/material';
import { CustomSection } from '../common/CustomSection';
import { ProductCard } from '../ProductCard/ProductCard';

const sampleProduct = {
  id: '1',
  title: 'A Moment in Bloom',
  imgURL: '',
  price: 98,
  discount: 20,
  isFavorite: false,
  tags: ['Popular'],
};

export default function RecommendedSection() {
  return (
    <CustomSection>
      <Container>
        <Typography variant="h2" sx={{ marginBottom: { xs: 2, md: 4 } }}>
          Our recommended
        </Typography>
        <Typography variant="h4" sx={{ marginBottom: { xs: 2, md: 4 } }}>
          Perfect for special moments
        </Typography>

        <ProductCard
          product={sampleProduct}
          onFavoriteClick={(id) => console.log('Favorite:', id)}
          onAddToCartClick={(id) => console.log('Bying:', id)}
        />
      </Container>
    </CustomSection>
  );
}
