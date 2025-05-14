import CitiesCard from '../../components/cities-card/cities-card';
import { CitiesCardData } from '../../components/cities-card/cities-card-data';
import NavTabs from '../../components/nav-tabs/nav-tabs';
import Header from '../../components/header/header';
import CitiesMap from '../../components/cities-map/cities-map';
import SortForm from '../../components/sort-form/sort-form';

type MainScreenProps = {
  citiesCardCount: number;
}

function MainScreen({citiesCardCount}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <NavTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{citiesCardCount} places to stay in Amsterdam</b>
              <SortForm />

              <div className="cities__places-list places__list tabs__content">
                {CitiesCardData.map((offer) => (
                  <article className="cities__card place-card" key={offer.id}>
                    <CitiesCard
                      title={offer.title}
                      type={offer.type}
                      price={offer.price}
                      previewImage={offer.previewImage}
                      isPremium={offer.isPremium}
                      isFavorite={offer.isFavorite}
                    />
                  </article>
                ))}
              </div>

            </section>
            <div className="cities__right-section">
              <CitiesMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
