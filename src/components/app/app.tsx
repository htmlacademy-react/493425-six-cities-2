import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthorizationStatus, Card, Routing } from '../../lib/types/types';
import Main from '../../pages/main/main';
import Layout from '../layout/layout';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  cards: Card[];
}

function App({cards}: AppProps): React.JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={Routing.Main} element={<Layout />}>
            <Route index element={<Main cards={cards} />} />
            <Route path={Routing.Login} element={<Login />} />
            <Route path={Routing.Favorites} element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites />
              </PrivateRoute>
            }
            />
            <Route path={Routing.Offer}>
              <Route index element={<NotFound />} />
              <Route path=':id' element={<Offer />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
