import React from 'react';
import {Outlet} from 'react-router-dom';
import { RoutingType, Routing } from '../../lib/types/types';
import { useBasePath } from '../../hooks/use-base-path';
import { LAYOUT_CLASSES, SECTOR_MAIN_CLASSES } from '../../consts';

function Layout (): React.JSX.Element {
  const pathname = useBasePath() as RoutingType;
  const layoutClass = LAYOUT_CLASSES[pathname];
  const mainClass = SECTOR_MAIN_CLASSES[pathname];
  const isFooterExist = pathname === Routing.Favorites;

  return (
    <div className={`page ${ layoutClass}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={`page__main ${ mainClass}`}>
        <Outlet />
      </main>
      {isFooterExist &&
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img
              className="footer__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width={64}
              height={33}
            />
          </a>
        </footer>}
    </div>
  );
}

export default Layout;
