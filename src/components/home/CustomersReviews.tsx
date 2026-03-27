import { Container } from '@mui/material';
import { CustomSection } from '../common/CustomSection';
import { SectionHeader } from '../common/SectionHeader';
import { CardsCarousel } from '../common/CardsCarousel';
import { ReviewCustomerCard } from '../common/ReviewCustomerCard';
import { sampleReviews } from '../../api/mock-data/sampleReviews';

export default function CustomersReviews() {
  return (
    <CustomSection>
      <Container>
        <SectionHeader title="Customers Reviews" subtitle="Thank you for review" />

        <CardsCarousel
          cards={sampleReviews}
          renderCard={(review) => <ReviewCustomerCard review={review} />}
        />
      </Container>
    </CustomSection>
  );
}
