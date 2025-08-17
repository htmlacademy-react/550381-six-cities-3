import OfferCardList from '../../components/offer-card-list/offer-card-list';
import NavTabs from '../../components/nav-tabs/nav-tabs';
import Map from '../../components/map/map';
import SortForm from '../../components/sort-form/sort-form';
import { TOffer } from '../../components/offer-card/types';

type MainScreenProps = {
  offerCardCount: number;
  offers: TOffer[];
}

function MainScreen({offers, offerCardCount}: MainScreenProps): JSX.Element {

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

            <OfferCardList offers={offers} type='mainScreen'/>

          </section>
          <div className="cities__right-section">
            <Map type='main' />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
