import { Card } from '../../models';

type PlaceCardProps = {
  card: Card;
}

function PlaceCard({ card }: PlaceCardProps): React.JSX.Element {
  return (
    <article className="cities__card place-card">
      {card.isPremium &&
              <div className="place-card__mark">
                <span>Premium</span>
              </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={card.imgSrc}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{card.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button${ card.inBookmarks ? ' place-card__bookmark-button--active' : '' } button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{card.inBookmarks ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${card.rating }%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{ card. name }</a>
        </h2>
        <p className="place-card__type">{ card.type }</p>
      </div>
    </article>
  );
}

export default PlaceCard;
