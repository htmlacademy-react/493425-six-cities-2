import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CITIES } from '../../const';
import { selectCity } from '../../store/offers-data/offers-data.selectors';
import { setCity } from '../../store/offers-data/offers-data';

function Cities() {
  const activeCity = useAppSelector(selectCity);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city: string) => (
        <li key={city} className="locations__item">
          <Link
            to='#'
            className={clsx(
              'locations__item-link',
              'tabs__item',
              {'tabs__item--active': city === activeCity}
            )}
            onClick={() => dispatch(setCity(city))}
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Cities;
