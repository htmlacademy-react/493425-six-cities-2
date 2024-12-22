import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PlaceOffer from '../../components/place-offer/place-offer';
import { PlaceOfferType } from '../../lib/types/offer-card';
import { useAppSelector } from '../../hooks';
import isEqual from 'lodash.isequal';
import { selectFavoriteOffers } from '../../store/favorites-data/favorites-data.selectors';

function Favorites() {
  const offers = useAppSelector(selectFavoriteOffers, isEqual);
  const cities = [...new Set(offers.map((card: PlaceOfferType) => card.city.name))];
  return (
    <>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((city: string) => (
              <li key={city} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to='#'>
                      <span>{city}</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers
                    .filter((card: PlaceOfferType) => card.city.name === city)
                    .map((card: PlaceOfferType) => (
                      <PlaceOffer
                        key={card.id}
                        card={card}
                        isSmall
                        className='favorites'
                      />
                    ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Favorites;
