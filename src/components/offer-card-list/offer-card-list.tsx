import OfferCard from '../offer-card/offer-card';
import { TOffer } from '../offer-card/types';
import { useState } from 'react';
import { Nullable } from 'vitest';

type OfferCardListProps = {
  offers: TOffer[];
  type: 'mainScreen' | 'offerScreen' | 'favoriteScreen';
}

const ClassesList = {
  mainScreen: {
    container: 'cities__places-list places__list tabs__content',
    prefix: 'cities',
  },
  offerScreen: {
    container: 'near-places__list places__list',
    prefix: 'near-places',
  },
  favoriteScreen: {
    container: 'favorites__places',
    prefix: 'favorites',
  }
};

const Sizes = {
  mainScreen: {
    width: '260',
    height: '200',
  },
  offerScreen: {
    width: '260',
    height: '200',
  },
  favoriteScreen: {
    width: '150',
    height: '110',
  }
};

function OfferCardList({offers, type}: OfferCardListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable<TOffer>>(null);

  const handleOfferHover = (offer?: TOffer) => {
    setActiveOffer(offer || null);
  };

  const classesForType = ClassesList[type];
  const sizeForType = Sizes[type];

  return (
    <div className={classesForType.container}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          handleHover={handleOfferHover}
          classesForType = {classesForType}
          sizeForType = {sizeForType}
        />
      ))}
    </div>
  );
}

export default OfferCardList;
