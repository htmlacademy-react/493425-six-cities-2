import { Link } from 'react-router-dom';
import { Routing, RoutingType } from '../../lib/types/routing';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../lib/types/authorization';
import { useBasePath } from '../../hooks/use-base-path';
import { logoutAction } from '../../store/api-actions';
import UserLink from './user-link/user-link';

function Header() {
  const pathname = useBasePath() as RoutingType;
  const isLoginPage = pathname === Routing.Login;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();

  const handleLinkClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
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
          {!isLoginPage &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <UserLink />
                </li>
                {isUserAuthorized &&
                  <li className="header__nav-item">
                    <Link onClick={handleLinkClick} className="header__nav-link" to='#'>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>}
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;
