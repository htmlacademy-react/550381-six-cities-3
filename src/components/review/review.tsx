import { TReview } from './types';

type ReviewProps = {
  review: TReview;
}

function Review({review}: ReviewProps): JSX.Element {
  const {comment, date, rating, user} = review;
  const formatDate: Date = new Date(date);
  const options = {
    month: 'long',
    year: 'numeric'
  };
  const ratingStyle = rating * 100 / 5;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name.split(' ')[0]}{formatDate.getDate()}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${ratingStyle}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">
          {formatDate.toLocaleDateString('En-en', options)}
          {/* April 2019 */}
        </time>
      </div>
    </li>
  );
}

export default Review;
