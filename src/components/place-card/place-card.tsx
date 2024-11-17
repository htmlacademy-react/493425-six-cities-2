import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { OfferCardType } from '../../lib/types/offer-card';
import { Routing } from '../../lib/types/routing';

type PlaceOfferProps = {
  card: OfferCardType;
  onMouseEnter?: (card: OfferCardType) => void;
  onMouseLeave?: (card: OfferCardType) => void;
  className?: string;
  isSmall?: boolean;
}

function PlaceOffer({ card, onMouseEnter, onMouseLeave, className, isSmall }: PlaceOfferProps): React.JSX.Element {
  return (
    <article
      className={clsx(className && `${className }__card`, 'place-card')}
      onMouseEnter={() => onMouseEnter && onMouseEnter(card)}
      onMouseLeave={() => onMouseLeave && onMouseLeave(card)}
    >
      {card.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={clsx(className && `${className }__image-wrapper`, 'place-card__image-wrapper')}>
        <Link to={`${Routing.Offer}/${card.id}`}>
          <img
            className="place-card__image"
            src={card.previewImage}
            width={isSmall ? 150 : 260}
            height={isSmall ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={clsx(className && `${className }__card-info`, 'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{card.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button${ card.isFavorite ? ' place-card__bookmark-button--active' : '' } button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{card.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${card.rating * 20 }%` }} />
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
