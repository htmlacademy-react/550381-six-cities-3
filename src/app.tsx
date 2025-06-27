import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const';
import MainScreen from './pages/main-screen/main-screen';
import LoginScreen from './pages/login-screen/login-screen';
import FavoritesScreen from './pages/favorites-screen/favorites-screen';
import OfferScreen from './pages/offer-screen/offer-screen';
import NotFoundScreen from './pages/not-found-screen/not-found-screen';
import PrivateRoute from './components/private-route/private-route';
import Layout from './components/layout/layout';

type AppScreenProps = {
  offerCardCount: number;
}

function App({offerCardCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Layout/>}
        >
          <Route path={AppRoute.Main} element={<MainScreen offerCardCount={offerCardCount}/>} />
          <Route path={AppRoute.Login} element={<LoginScreen/>} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesScreen/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferScreen/>} />
          <Route path='*' element={<NotFoundScreen/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
