import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { setCity } from '../../store/action';

type CitiesProps = {
  cities: string[];
  activeCity: string;
}

function Cities({ cities, activeCity }: CitiesProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city: string) => (
        <li key={city} className="locations__item">
          <Link
            to='#'
            className={clsx(
              'locations__item-link',
              'tabs__item',
              {'tabs__item--active': city === activeCity}
            )}
            onClick={() => {
              dispatch(setCity(city));
            }}
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Cities;
