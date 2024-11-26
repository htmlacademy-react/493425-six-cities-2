import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import Cities from '../../components/cities/cities';
import { CITIES } from '../../mocks/cities';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { OFFERS } from '../../mocks/offers';
import { getCityOffers } from '../../utils/get-city-offers';
import { setCityOffers } from '../../store/action';
import { sortOffers } from '../../utils/sort-offers';
import CitiesStay from '../../components/cities-stay/cities-stay';
import CitiesStayEmpty from '../../components/cities-stay-empty/cities-stay-empty';
import clsx from 'clsx';

function Main(): React.JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const sorting = useAppSelector((state) => state.sorting);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const newOffers = sortOffers(sorting, getCityOffers(activeCity, OFFERS));
    dispatch(setCityOffers(newOffers));
  }, [
    dispatch,
    activeCity,
    sorting
  ]);

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
      <div className="cities">
        <div className={clsx(
          'cities__places-container',
          { 'cities__places-container--empty': !offers.length },
          'container'
        )}
        >
          {offers.length
            ? <CitiesStay activeCity={activeCity} offers={offers} />
            : <CitiesStayEmpty activeCity={activeCity} />}
        </div>
      </div>
    </>
  );
}

export default Main;
