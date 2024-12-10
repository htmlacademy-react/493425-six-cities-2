import { Helmet } from 'react-helmet-async';
import Cities from '../../components/cities/cities';
import { useAppSelector } from '../../hooks';
import CitiesStay from '../../components/cities-stay/cities-stay';
import CitiesStayEmpty from '../../components/cities-stay-empty/cities-stay-empty';
import clsx from 'clsx';
import { CITIES } from '../../const';
import { MoonLoader } from 'react-spinners';

import styles from './main.module.css';

function Main(): React.JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const cityOffers = useAppSelector((state) => state.cityOffers);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Offers</h1>
      <div className="tabs">
        <section className="locations container">
          <Cities activeCity={activeCity} cities={CITIES} />
        </section>
      </div>
      <MoonLoader loading={isOffersLoading} className={styles.spinner} />
      {!isOffersLoading &&
        <div className="cities">
          <div className={clsx(
            'cities__places-container',
            { 'cities__places-container--empty': !cityOffers.length },
            'container'
          )}
          >
            {cityOffers.length
              ? <CitiesStay activeCity={activeCity} offers={cityOffers} />
              : <CitiesStayEmpty activeCity={activeCity} />}
          </div>
        </div>}
    </>
  );
}

export default Main;
