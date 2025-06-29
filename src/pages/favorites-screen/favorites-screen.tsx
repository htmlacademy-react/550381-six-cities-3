import OfferCard from '../../components/offer-card/offer-card';
import { OfferCardData } from '../../components/offer-card/offer-card-data';

function FavoritesScreen(): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {OfferCardData.slice(0, 2).map((offer) => (
                  <OfferCard
                    key={offer.id}
                    title={offer.title}
                    type={offer.type}
                    price={offer.price}
                    previewImage={offer.previewImage}
                    isPremium={offer.isPremium}
                    isFavorite={offer.isFavorite}
                  />
                ))}
              </div>
            </li>

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Cologne</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {OfferCardData.slice(3).map((offer) => (
                  <OfferCard
                    key={offer.id}
                    title={offer.title}
                    type={offer.type}
                    price={offer.price}
                    previewImage={offer.previewImage}
                    isPremium={offer.isPremium}
                    isFavorite={offer.isFavorite}
                  />
                ))}
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
