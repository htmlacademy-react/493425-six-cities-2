import { useAppSelector } from '../../hooks';
import { selectCity, selectCityOffers } from '../../store/offers-data/offers-data.selectors';
import Map from '../map/map';
import OfferSorting from '../offer-sorting/offer-sorting';
import PlaceOffer from '../place-offer/place-offer';
import { PlaceOfferType } from '../../lib/types/offer-card';
import clsx from 'clsx';

const OFFERS_CLASSES = [
  'cities__places-list',
  'places__list',
  'tabs__content'
];

function CitiesStay() {
  const offers = useAppSelector(selectCityOffers);
  const center = offers[0]?.city.location;
  const activeCity = useAppSelector(selectCity);
  const placeWord = offers.length === 1 ? 'place' : 'places';

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} {placeWord} to stay in {activeCity}</b>
        <OfferSorting />
        <div className={clsx(OFFERS_CLASSES)}>
          {offers.map((card: PlaceOfferType) => (
            <PlaceOffer
              key={card.id}
              card={card}
              className='cities'
              useHover
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          className='cities__map'
          offers={offers}
          center={center}
        />
      </div>
    </>
  );
}

export default CitiesStay;
