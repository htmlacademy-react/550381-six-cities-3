import OfferCard from '../../components/offer-card/offer-card';
import { OfferCardData } from '../../components/offer-card/offer-card-data';
import NavTabs from '../../components/nav-tabs/nav-tabs';
import CitiesMap from '../../components/cities-map/cities-map';
import SortForm from '../../components/sort-form/sort-form';

type MainScreenProps = {
  offerCardCount: number;
}

function MainScreen({offerCardCount}: MainScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <NavTabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offerCardCount} places to stay in Amsterdam</b>
            <SortForm />

            <div className="cities__places-list places__list tabs__content">
              {OfferCardData.map((offer) => (
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

          </section>
          <div className="cities__right-section">
            <CitiesMap />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
