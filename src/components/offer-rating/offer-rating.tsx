type OfferRatingProps = {
  rating: number;
  ratingStyle: number;
}

function OfferRating({rating, ratingStyle}: OfferRatingProps): JSX.Element {
  return (
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{ width: `${ratingStyle}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">{rating}</span>
    </div>
  );
}

export default OfferRating;
