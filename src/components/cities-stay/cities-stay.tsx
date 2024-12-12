import { useAppSelector } from '../../hooks';
import { selectCityOffers } from '../../store/selectors';
import Map from '../map/map';
import OfferSorting from '../offer-sorting/offer-sorting';
import Offers from '../offers/offers';

const OFFERS_CLASSES = [
  'cities__places-list',
  'places__list',
  'tabs__content'
];

function CitiesStay() {
  const offers = useAppSelector(selectCityOffers);
  const activeCity = useAppSelector((state) => state.city);

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity}</b>
        <OfferSorting />
        <Offers
          offers={offers}
          classNames={OFFERS_CLASSES}
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
    </>
  );
}

export default CitiesStay;
