import { useEffect, useState } from 'react';
import PlaceOffer from '../place-card/place-card';
import { OfferCardType } from '../../lib/types/offer-card';
import clsx from 'clsx';


type CitiesProps = {
  offers: OfferCardType[];
  changeActiveOfferId: (id: number) => void;
  classNames?: string[];
  offerClassName?: string;
  isSmall?: boolean;
}

function Cities({ offers, changeActiveOfferId, classNames, isSmall, offerClassName }: CitiesProps): React.JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(NaN);

  useEffect(() => {
    changeActiveOfferId(activeOfferId);
  }, [activeOfferId, changeActiveOfferId]);

  function handleMouseEnter(card: OfferCardType) {
    setActiveOfferId(card.id);
  }

  function handleMouseLeave(card: OfferCardType) {
    if (activeOfferId === card.id) {
      setActiveOfferId(NaN);
    }
  }

  return (
    <div className={clsx(classNames)}>
      {offers.map((card: OfferCardType) => (
        <PlaceOffer
          key={card.id}
          card={card}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={offerClassName}
          isSmall={isSmall}
        />
      ))}
    </div>
  );
}

export default Cities;
