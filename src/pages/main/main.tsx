import { Helmet } from 'react-helmet-async';
import Cities from '../../components/cities/cities';
import { useAppSelector } from '../../hooks';
import CitiesStay from '../../components/cities-stay/cities-stay';
import CitiesStayEmpty from '../../components/cities-stay-empty/cities-stay-empty';
import clsx from 'clsx';
import { CITIES } from '../../const';
import { MoonLoader } from 'react-spinners';

import styles from './main.module.css';
import { selectCityOffers } from '../../store/selectors';

function Main() {
  const activeCity = useAppSelector((state) => state.city);
  const cityOffersLength = useAppSelector(selectCityOffers).length;
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
            { 'cities__places-container--empty': !cityOffersLength },
            'container'
          )}
          >
            {cityOffersLength
              ? <CitiesStay />
              : <CitiesStayEmpty />}
          </div>
        </div>}
    </>
  );
}

export default Main;
