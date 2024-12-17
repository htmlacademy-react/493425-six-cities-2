import { Helmet } from 'react-helmet-async';
import Cities from '../../components/cities/cities';
import { useAppSelector } from '../../hooks';
import CitiesStay from '../../components/cities-stay/cities-stay';
import CitiesStayEmpty from '../../components/cities-stay-empty/cities-stay-empty';
import clsx from 'clsx';
import { MoonLoader } from 'react-spinners';
import styles from './main.module.css';
import { selectCityOffers, selectIsOffersLoading } from '../../store/offers-data/offers-data.selectors';
import { isEqual } from 'lodash';

function Main() {
  const cityOffersLength = useAppSelector(selectCityOffers, isEqual).length;
  const isOffersLoading = useAppSelector(selectIsOffersLoading);

  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Offers</h1>
      <div className="tabs">
        <section className="locations container">
          <Cities />
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
