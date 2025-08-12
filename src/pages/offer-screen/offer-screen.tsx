import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { TOffer } from '../../components/offer-card/types';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Badge from '../../components/badge/badge';
import OfferRating from '../../components/offer-rating/offer-rating';
import OfferGoodsItem from '../../components/offer-goods-item/offer-goods-item';
import OfferCard from '../../components/offer-card/offer-card';
import ReviewsForm from '../../components/reviews-form/reviews-form';

type OfferScreenProps = {
  offers: TOffer[];
  authorizationStatus:string;
}

function OfferScreen({offers, authorizationStatus}: OfferScreenProps): JSX.Element {
  const {id} = useParams();
  const currentOffer: TOffer | undefined = offers.find((offer: TOffer) => offer.id === id);

  if (!currentOffer) {
    return <NotFoundScreen />;
  }
  const maxAdultsTitle = `Max ${currentOffer.maxAdults} ${currentOffer.maxAdults > 1 ? 'adults' : 'adult'}`;
  const bedroomsTitle = `${currentOffer.bedrooms} ${currentOffer.bedrooms > 1 ? 'Bedrooms' : 'Bedrooms'}`;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {currentOffer.images.map((image) => (
              <div className="offer__image-wrapper" key={uuidv4()}>
                <img
                  className="offer__image"
                  src={image}
                  alt="Photo studio"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {currentOffer.isPremium && <Badge text='Premium' className='offer__mark' />}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {currentOffer.title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <OfferRating rating={currentOffer.rating}/>

            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {currentOffer.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedroomsTitle}
              </li>
              <li className="offer__feature offer__feature--adults">
                {maxAdultsTitle}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{currentOffer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {currentOffer.goods.map((good) => (<OfferGoodsItem good={good} key={uuidv4()}/>))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="offer__avatar user__avatar"
                    src="img/avatar-angelina.jpg"
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">Angelina</span>
                <span className="offer__user-status">Pro</span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  A quiet cozy and picturesque that hides behind a a river by
                  the unique lightness of Amsterdam. The building is green and
                  from 18th century.
                </p>
                <p className="offer__text">
                  An independent House, strategically located between Rembrand
                  Square and National Opera, but where the bustle of the city
                  comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews &middot; <span className="reviews__amount">1</span>
              </h2>
              <ul className="reviews__list">
                <li className="reviews__item">
                  <div className="reviews__user user">
                    <div className="reviews__avatar-wrapper user__avatar-wrapper">
                      <img
                        className="reviews__avatar user__avatar"
                        src="img/avatar-max.jpg"
                        width="54"
                        height="54"
                        alt="Reviews avatar"
                      />
                    </div>
                    <span className="reviews__user-name">Max</span>
                  </div>
                  <div className="reviews__info">
                    <div className="reviews__rating rating">
                      <div className="reviews__stars rating__stars">
                        <span style={{ width: '80%' }}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <p className="reviews__text">
                      A quiet cozy and picturesque that hides behind a a river
                      by the unique lightness of Amsterdam. The building is
                      green and from 18th century.
                    </p>
                    <time className="reviews__time" dateTime="2019-04-24">
                      April 2019
                    </time>
                  </div>
                </li>
              </ul>
              {authorizationStatus === 'AUTH' ? (
                <ReviewsForm />
              ) : null}

            </section>
          </div>
        </div>
        <section className="offer__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            {offers.map((offer) => (
              <OfferCard
                key={offer.id}
                offer={offer}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferScreen;
