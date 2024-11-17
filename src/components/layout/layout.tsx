import React from 'react';
import {Outlet} from 'react-router-dom';
import { useBasePath } from '../../hooks/use-base-path';
import { LAYOUT_CLASSES, SECTOR_MAIN_CLASSES } from '../../const';
import clsx from 'clsx';
import Header from '../header/header';
import Footer from '../footer/footer';
import { RoutingType, Routing } from '../../lib/types/routing';

function Layout (): React.JSX.Element {
  const pathname = useBasePath() as RoutingType;
  const layoutClasses = LAYOUT_CLASSES[pathname];
  const mainClasses = SECTOR_MAIN_CLASSES[pathname];
  const isFooterExist = pathname === Routing.Favorites;

  return (
    <div className={clsx('page', layoutClasses)}>
      <Header />
      <main className={clsx('page__main', mainClasses)}>
        <Outlet />
      </main>
      {isFooterExist && <Footer />}
    </div>
  );
}

export default Layout;
