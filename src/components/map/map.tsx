import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import { TCity, TOffer } from '../offer-card/types';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../const';

import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';

type MapProps = {
  type: 'main' | 'offer';
  city: TCity;
  offers: TOffer[];
  activeOffer: TOffer | undefined;
}

const classes = {
  main: 'cities__map',
  offer: 'offer__map'
};

const defaultMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const activeMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({type, city, offers, activeOffer}: MapProps): JSX.Element {
  const currentClass = classes[type];
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useMap({location: city.location, containerRef: mapContainerRef});

  useEffect((): void => {
    if (map) {
      offers.forEach((offer): void => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: offer.id === activeOffer?.id ? activeMarkerIcon : defaultMarkerIcon,
          }).addTo(map);
      });

    }
  }, [activeOffer, map, offers]);

  return (
    <section className={clsx(`${currentClass} map`)} ref={mapContainerRef}></section>
  );
}

export default Map;
