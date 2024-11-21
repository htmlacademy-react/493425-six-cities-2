import { Helmet } from 'react-helmet-async';
import Offers from '../../components/offers/offers';
import Map from '../../components/map/map';
import { useEffect, useState } from 'react';
import Cities from '../../components/cities/cities';
import { CITIES } from '../../mocks/cities';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { OFFERS } from '../../mocks/offers';
import { getCityOffers } from '../../utils/get-city-offers';
import { setCityOffers } from '../../store/action';

function Main(): React.JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(NaN);
  const offersClasses = [
    'cities__places-list',
    'places__list',
    'tabs__content'
  ];
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const newOffers = getCityOffers(activeCity, OFFERS);
    dispatch(setCityOffers(newOffers));
  }, [
    dispatch,
    activeCity
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
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                  Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>
                    Popular
                </li>
                <li className="places__option" tabIndex={0}>
                    Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                    Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                    Top rated first
                </li>
              </ul>
            </form>
            <Offers
              offers={offers}
              changeActiveOfferId={setActiveOfferId}
              classNames={offersClasses}
              offerClassName='cities'
            />
          </section>
          <div className="cities__right-section">
            <Map
              className='cities__map'
              offers={offers}
              centerOffer={offers[0]}
              selectedOfferId={activeOfferId}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
