import React from 'react';
import {Outlet} from 'react-router-dom';
import { useBasePath } from '../../hooks/use-base-path';
import { EMPTY_OFFERS_CLASS, LAYOUT_CLASSES, SECTOR_MAIN_CLASSES } from '../../const';
import clsx from 'clsx';
import Header from '../header/header';
import Footer from '../footer/footer';
import { RoutingType, Routing } from '../../lib/types/routing';
import { useAppSelector } from '../../hooks';

function Layout () {
  const pathname = useBasePath() as RoutingType;
  const layoutClasses = LAYOUT_CLASSES[pathname];
  const mainClasses = SECTOR_MAIN_CLASSES[pathname];
  const isFooterExist = pathname === Routing.Favorites;
  const offersLenth = useAppSelector((state) => state.cityOffersLength);
  const emptyMainClass = pathname === Routing.Main && !offersLenth && EMPTY_OFFERS_CLASS;

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
