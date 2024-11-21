import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import Layout from '../layout/layout';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { AuthorizationStatus } from '../../lib/types/authorization';
import { PlaceOfferType } from '../../lib/types/offer-card';
import { Routing } from '../../lib/types/routing';

type AppProps = {
  offers: PlaceOfferType[];
}

function App({offers}: AppProps): React.JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={Routing.Main} element={<Layout />}>
            <Route index element={<Main offers={offers} />} />
            <Route path={Routing.Login} element={<Login />} />
            <Route path={Routing.Favorites} element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites offers={offers} />
              </PrivateRoute>
            }
            />
            <Route path={`${Routing.Offer}/:id`} element={<Offer />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
