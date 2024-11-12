import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { TOfferCard } from '../../lib/types/offer-card';
import { Routing } from '../../lib/types/routing';

type PlaceOfferProps = {
  card: TOfferCard;
  onMouseEnter?: (card: TOfferCard) => void;
  onMouseLeave?: (card: TOfferCard) => void;
  isFavorite?: boolean;
}

function PlaceOffer({ card, onMouseEnter, onMouseLeave, isFavorite }: PlaceOfferProps): React.JSX.Element {
  return (
    <article
      className={clsx(isFavorite ? 'favorites__card' : 'cities__card', 'place-card')}
      onMouseEnter={() => onMouseEnter && onMouseEnter(card)}
      onMouseLeave={() => onMouseLeave && onMouseLeave(card)}
    >
      {card.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={clsx(isFavorite ? 'favorites__image-wrapper' : 'cities__image-wrapper', 'place-card__image-wrapper')}>
        <Link to={`${Routing.Offer}/${card.id}`}>
          <img
            className="place-card__image"
            src={card.previewImage}
            width={isFavorite ? 150 : 260}
            height={isFavorite ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={clsx(isFavorite && 'favorites__card-info', 'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{card.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button${ card.isFavorite || isFavorite ? ' place-card__bookmark-button--active' : '' } button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{card.isFavorite || isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${card.rating }%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${Routing.Offer}/${card.id}`}>{ card.title }</Link>
        </h2>
        <p className="place-card__type">{ card.type }</p>
      </div>
    </article>
  );
}

export default PlaceOffer;
