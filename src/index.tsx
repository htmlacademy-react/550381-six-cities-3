import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CitiesCardData } from './components/cities-card/cities-card-data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App citiesCardCount={CitiesCardData.length}/>
  </React.StrictMode>
);
