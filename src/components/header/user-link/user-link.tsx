import { Link } from 'react-router-dom';
import { Routing } from '../../../lib/types/routing';
import { useAppSelector } from '../../../hooks';
import { selectUser } from '../../../store/user/user.selectors';
import isEqual from 'lodash.isequal';
import { selectFavoriteOffers } from '../../../store/favorites-data/favorites-data.selectors';

function UserLink() {
  const user = useAppSelector(selectUser, isEqual);
  const favoriteOffersLength = useAppSelector(selectFavoriteOffers).length;

  if (user) {
    return (
      <Link className="header__nav-link header__nav-link--profile" to={Routing.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
          <img
            className="user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
          />
        </div>
        <span className="header__user-name user__name">
          {user.email}
        </span>
        <span className="header__favorite-count">{favoriteOffersLength}</span>
      </Link>
    );
  }

  return (
    <Link className="header__nav-link header__nav-link--profile" to={Routing.Login}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </Link>
  );
}

export default UserLink;
