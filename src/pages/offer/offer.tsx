import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { changeOfferFavoriteStatusAction, fetchOfferAction, fetchOfferNearPlacesAction, fetchOfferReviewsAction } from '../../store/api-actions';
import { selectOffer, selectOfferNearPlaces, selectSortedOfferReviews } from '../../store/offer-data/offer-data.selectors';
import { clearOffer, setActiveOfferId } from '../../store/offer-data/offer-data';
import isEqual from 'lodash.isequal';
import clsx from 'clsx';
import PlaceOffer from '../../components/place-offer/place-offer';
import { OfferDetailType, PlaceOfferType } from '../../lib/types/offer-card';

function Offer() {
  const { id } = useParams();
  const cardInfo = useAppSelector(selectOffer, isEqual) as OfferDetailType;
  const reviews = useAppSelector(selectSortedOfferReviews);
  const nearPlaces = useAppSelector(selectOfferNearPlaces);
  const mapPlaces = cardInfo && nearPlaces.concat(cardInfo) || [];

  const dispatch = useAppDispatch();

  const handleClickButtonFavorite = () => {
    dispatch(changeOfferFavoriteStatusAction({
      offer: cardInfo,
      status: cardInfo.isFavorite ? 0 : 1
    }));
  };

  useEffect(() => {
    if (id) {
      dispatch(setActiveOfferId(id));
      dispatch(fetchOfferAction(id));
      dispatch(fetchOfferReviewsAction(id));
      dispatch(fetchOfferNearPlacesAction(id));
    }

    return () => {
      dispatch(clearOffer());
    };

  }, [id, dispatch]);

  const nearPlaceClasses = [
    'near-places__list',
    'places__list'
  ];

  return (
    <>
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      {cardInfo &&
        <>
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {cardInfo.images.slice(0, 6).map((src: string) => (
                  <div key={src} className="offer__image-wrapper">
                    <img
                      className="offer__image"
                      src={src}
                      alt="Photo studio"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {cardInfo.isPremium &&
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {cardInfo.title}
                  </h1>
                  <button
                    className={clsx(
                      'offer__bookmark-button',
                      'button',
                      {'offer__bookmark-button--active': cardInfo.isFavorite}
                    )}
                    type="button"
                    onClick={handleClickButtonFavorite}
                  >
                    <svg className="offer__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">{cardInfo.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: `${Math.round(cardInfo.rating) * 20 }%` }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{cardInfo.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {cardInfo.type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {cardInfo.bedrooms} Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {cardInfo.maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">€{cardInfo.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {cardInfo.goods.map((item: string) => (
                      <li key={item} className="offer__inside-item">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className={clsx(
                      'offer__avatar-wrapper',
                      {'offer__avatar-wrapper--pro': cardInfo.host.isPro},
                      'user__avatar-wrapper')}
                    >
                      <img
                        className="offer__avatar user__avatar"
                        src={cardInfo.host.avatarUrl}
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">{cardInfo.host.name}</span>
                    {cardInfo.host.isPro && <span className="offer__user-status">Pro</span>}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      {cardInfo.description}
                    </p>
                  </div>
                </div>
                <Reviews reviews={reviews} />
              </div>
            </div>
            <Map
              className='offer__map'
              offers={mapPlaces}
              center={cardInfo.city.location}
              height={579}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className={clsx(nearPlaceClasses)}>
                {nearPlaces.map((card: PlaceOfferType) => (
                  <PlaceOffer
                    key={card.id}
                    card={card}
                    className='near-places'
                  />
                ))}
              </div>
            </section>
          </div>
        </>}
    </>
  );
}

export default Offer;
