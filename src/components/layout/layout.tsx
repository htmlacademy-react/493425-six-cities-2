import { Outlet } from 'react-router-dom';
import { useBasePath } from '../../hooks/use-base-path';
import { EMPTY_FAVORITES_CLASS, EMPTY_OFFERS_CLASS, LAYOUT_CLASSES, SECTOR_MAIN_CLASSES } from '../../const';
import clsx from 'clsx';
import Header from '../header/header';
import Footer from '../footer/footer';
import { RoutingType, Routing } from '../../lib/types/routing';
import { useAppSelector } from '../../hooks';
import { selectCityOffers } from '../../store/offers-data/offers-data.selectors';
import { selectFavoriteOffers } from '../../store/favorites-data/favorites-data.selectors';

function Layout () {
  let pathname = useBasePath() as RoutingType;
  const mainClasses = SECTOR_MAIN_CLASSES[pathname];

  const offersLength = useAppSelector(selectCityOffers).length;
  const favoritesLength = useAppSelector(selectFavoriteOffers).length;
  const emptyMainClass = pathname === Routing.Main && !offersLength && EMPTY_OFFERS_CLASS;
  const emptyFavoriteClass = pathname === Routing.Favorites && !favoritesLength && EMPTY_FAVORITES_CLASS;

  const isFavorites = pathname === Routing.Favorites;
  if (isFavorites && !favoritesLength) {
    pathname = Routing.FavoritesEmpty;
  }
  const layoutClasses = LAYOUT_CLASSES[pathname];

  return (
    <div className={clsx('page', layoutClasses)}>
      <Header />
      <main className={clsx('page__main', mainClasses, emptyMainClass, emptyFavoriteClass)}>
        <Outlet />
      </main>
      {isFavorites && <Footer />}
    </div>
  );
}

export default Layout;
