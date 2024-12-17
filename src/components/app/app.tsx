import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import Layout from '../layout/layout';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { Routing } from '../../lib/types/routing';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path={Routing.Main} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={Routing.Login} element={<Login />} />
          <Route path={Routing.Favorites} element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
          />
          <Route path={`${Routing.Offer}/:id`} element={<Offer />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
