import { Helmet } from 'react-helmet-async';
import Offers from '../../components/offers/offers';
import Map from '../../components/map/map';
import { useEffect } from 'react';
import Cities from '../../components/cities/cities';
import { CITIES } from '../../mocks/cities';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { OFFERS } from '../../mocks/offers';
import { getCityOffers } from '../../utils/get-city-offers';
import { setCityOffers } from '../../store/action';
import OfferSorting from '../../components/offer-sorting/offer-sorting';
import { sortOffers } from '../../utils/sort-offers';

function Main(): React.JSX.Element {
  const offersClasses = [
    'cities__places-list',
    'places__list',
    'tabs__content'
  ];
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
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {activeCity}</b>
            <OfferSorting />
            <Offers
              offers={offers}
              classNames={offersClasses}
              offerClassName='cities'
            />
          </section>
          <div className="cities__right-section">
            <Map
              className='cities__map'
              offers={offers}
              center={offers[0]?.location}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
