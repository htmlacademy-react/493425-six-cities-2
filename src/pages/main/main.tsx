import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import Cities from '../../components/cities/cities';
import { useAppSelector } from '../../hooks';
import { getCityOffers } from '../../utils/get-city-offers';
import { sortOffers } from '../../utils/sort-offers';
import CitiesStay from '../../components/cities-stay/cities-stay';
import CitiesStayEmpty from '../../components/cities-stay-empty/cities-stay-empty';
import clsx from 'clsx';
import { PlaceOfferType } from '../../lib/types/offer-card';
import { CITIES } from '../../const';

function Main(): React.JSX.Element {
  const [cityOffers, setCityOffers] = useState<PlaceOfferType[]>([]);
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const sorting = useAppSelector((state) => state.sorting);

  useEffect(() => {
    const newOffers = sortOffers(sorting, getCityOffers(activeCity, offers));
    setCityOffers(newOffers);
  }, [
    activeCity,
    sorting,
    offers
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
          { 'cities__places-container--empty': !cityOffers.length },
          'container'
        )}
        >
          {cityOffers.length
            ? <CitiesStay activeCity={activeCity} offers={cityOffers} />
            : <CitiesStayEmpty activeCity={activeCity} />}
        </div>
      </div>
    </>
  );
}

export default Main;
