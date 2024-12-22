import { Outlet } from 'react-router-dom';
import { useBasePath } from '../../hooks/use-base-path';
import { EMPTY_OFFERS_CLASS, LAYOUT_CLASSES, SECTOR_MAIN_CLASSES } from '../../const';
import clsx from 'clsx';
import Header from '../header/header';
import Footer from '../footer/footer';
import { RoutingType, Routing } from '../../lib/types/routing';
import { useAppSelector } from '../../hooks';
import { selectCityOffers } from '../../store/offers-data/offers-data.selectors';
import isEqual from 'lodash.isequal';

function Layout () {
  const pathname = useBasePath() as RoutingType;
  const layoutClasses = LAYOUT_CLASSES[pathname];
  const mainClasses = SECTOR_MAIN_CLASSES[pathname];
  const isFooterExist = pathname === Routing.Favorites;
  const offersLength = useAppSelector(selectCityOffers, isEqual).length;
  const emptyMainClass = pathname === Routing.Main && !offersLength && EMPTY_OFFERS_CLASS;

  return (
    <div className={clsx('page', layoutClasses)}>
      <Header />
      <main className={clsx('page__main', mainClasses, emptyMainClass)}>
        <Outlet />
      </main>
      {isFooterExist && <Footer />}
    </div>
  );
}

export default Layout;
