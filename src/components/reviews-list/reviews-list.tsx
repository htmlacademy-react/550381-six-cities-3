import Review from '../review/review';
import { TReview } from '../review/types';

type ReviewsListProps = {
  reviews: TReview[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review review={review} key={review.id}/>
      ))}
    </ul>
  );
}

export default ReviewsList;
