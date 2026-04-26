import type { Review } from '../../types/review';
import review_temp from './../../assets/images/review_temp.webp';
import empty_img from './../../assets/images/empty_img.webp';

export const sampleReviews: Review[] = [
  {
    id: '1',
    name: 'Anna Milton',
    imgURL: review_temp,
    rating: 5,
    message:
      'A very beautiful and delicate bouquet. The flowers were fresh, carefully arranged, and looked even better than in the photos. Fast delivery and excellent service. Thank you!',
  },
  {
    id: '2',
    name: 'John Johnson',
    imgURL: empty_img,
    rating: 4,
    message:
      'A very beautiful and delicate bouquet. The flowers were fresh, carefully arranged, and looked even better than in the photos. Fast delivery and excellent service. Thank you!',
  },
  {
    id: '3',
    name: 'Maria Henson',
    imgURL: empty_img,
    rating: 4.5,
    message:
      'A very beautiful and delicate bouquet. The flowers were fresh, carefully arranged, and looked even better than in the photos. Fast delivery and excellent service. Thank you!',
  },
  {
    id: '4',
    name: 'Maria Henson',
    imgURL: review_temp,
    rating: 5,
    message:
      'A very beautiful and delicate bouquet. The flowers were fresh, carefully arranged, and looked even better than in the photos. Fast delivery and excellent service. Thank you!',
  },
  {
    id: '5',
    name: 'Maria Henson',
    imgURL: review_temp,
    rating: 5,
    message:
      'A very beautiful and delicate bouquet. The flowers were fresh, carefully arranged, and looked even better than in the photos. Fast delivery and excellent service. Thank you!',
  },
];
