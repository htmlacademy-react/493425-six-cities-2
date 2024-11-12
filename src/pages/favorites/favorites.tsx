import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card } from '../../lib/types/types';
import PlaceCard from '../../components/place-card/place-card';

type FavoritesProps = {
  cards: Card[];
}

function Favorites({ cards }: FavoritesProps): React.JSX.Element {
  const cities = [...new Set(cards.map((card: Card) => card.city))];
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
                  {cards
                    .filter((card: Card) => card.city === city)
                    .map((card: Card) => (
                      <PlaceCard
                        key={card.id}
                        card={card}
                        isFavorite
                      />
                    ))
                  }
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
