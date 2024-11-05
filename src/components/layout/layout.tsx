import React from 'react';
import {Link, Outlet} from 'react-router-dom';
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
              <Link to={Routing.Main} className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={Routing.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to='#'>
                    <span className="header__signout">Sign out</span>
                  </Link>
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
          <Link className="footer__logo-link" to={Routing.Main}>
            <img
              className="footer__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width={64}
              height={33}
            />
          </Link>
        </footer>}
    </div>
  );
}

export default Layout;
