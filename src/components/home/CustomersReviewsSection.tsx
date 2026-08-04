import { SectionHeader } from '../common/SectionHeader';
import { CardsCarousel } from '../common/CardsCarousel';
import { ReviewCustomerCard } from '../common/ReviewCustomerCard';
import { sampleReviews } from '@/api/mock-data/sampleReviews';
import { SectionContainer } from '../layouts/SectionContainer';

interface CustomersReviewsSectionProps {
  isCentered?: boolean;
  isReview?: boolean;
}

export default function CustomersReviewsSection({
  isCentered,
  isReview,
}: CustomersReviewsSectionProps) {
  return (
    <section data-testid="customers-reviews-section">
      <SectionContainer>
        <SectionHeader title="Customer Reviews" subtitle="Thank you for your review" />

        <CardsCarousel
          cards={sampleReviews}
          centered={isCentered}
          isReview={isReview}
          renderCard={(review) => <ReviewCustomerCard review={review} />}
        />
      </SectionContainer>
    </section>
  );
}
