import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { OfferCardData } from './components/offer-card/offer-card-data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerCardCount={OfferCardData.length}/>
  </React.StrictMode>
);
