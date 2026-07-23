import { MOCK_ACCESSORIES } from '@/api/mock-data/mockAccessories';
import { AccessoriesCarousel } from '../common/AccessoriesCarousel';

export default function AccessoriesSection() {
  return (
    <div data-testid="accessories-section">
      <AccessoriesCarousel accessories={MOCK_ACCESSORIES} showPagination={true} />
    </div>
  );
}
