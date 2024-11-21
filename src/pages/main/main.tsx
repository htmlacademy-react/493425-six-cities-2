import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Cities from '../../components/cities/cities';
import { PlaceOfferType } from '../../lib/types/offer-card';
import Map from '../../components/map/map';
import { useState } from 'react';

type MainPageProps = {
  offers: PlaceOfferType[];
}

function Main({ offers }: MainPageProps): React.JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(NaN);
  const citiesClasses = [
    'cities__places-list',
    'places__list',
    'tabs__content'
  ];

  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to='#'>
                <span>Paris</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to='#'>
                <span>Cologne</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to='#'>
                <span>Brussels</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item tabs__item--active" to='#'>
                <span>Amsterdam</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to='#'>
                <span>Hamburg</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to='#'>
                <span>Dusseldorf</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
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
            <Cities
              offers={offers}
              changeActiveOfferId={setActiveOfferId}
              classNames={citiesClasses}
              offerClassName='cities'
            />
          </section>
          <div className="cities__right-section">
            <Map
              className='cities__map'
              offers={offers}
              centerOffer={offers[2]}
              selectedOfferId={activeOfferId}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
