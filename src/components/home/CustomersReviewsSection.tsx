import { sampleReviews } from '@/api/mock-data/sampleReviews';
import { CardsCarousel } from '../common/CardsCarousel';
import { ReviewCustomerCard } from '../common/ReviewCustomerCard';
import { SectionHeader } from '../common/SectionHeader';
import { SectionContainer } from '../layout/SectionContainer';

interface CustomersReviewsSectionProps {
  isCentered?: boolean;
  isReview?: boolean;
}

export default function CustomersReviewsSection({
  isCentered,
  isReview,
}: CustomersReviewsSectionProps) {
  return (
    <section>
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
