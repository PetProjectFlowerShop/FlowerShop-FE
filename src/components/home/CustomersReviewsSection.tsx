import { Container } from '@mui/material';
import { CustomSection } from '../common/CustomSection';
import { SectionHeader } from '../common/SectionHeader';
import { CardsCarousel } from '../common/CardsCarousel';
import { ReviewCustomerCard } from '../common/ReviewCustomerCard';
import { sampleReviews } from '../../api/mock-data/sampleReviews';

export default function CustomersReviewsSection() {
  return (
    <CustomSection data-testid="customers-reviews-section">
      <Container>
        <SectionHeader title="Customer Reviews" subtitle="Thank you for your review" />

        <CardsCarousel
          cards={sampleReviews}
          centered={true}
          renderCard={(review) => <ReviewCustomerCard review={review} />}
        />
      </Container>
    </CustomSection>
  );
}
