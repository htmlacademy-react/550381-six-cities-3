import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { OfferCardData } from './components/offer-card/offer-card-data';
import { OfferMocks } from './mocks/offer-mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={OfferMocks} offerCardCount={OfferCardData.length}/>
  </React.StrictMode>
);
