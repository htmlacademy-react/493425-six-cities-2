import PlaceOffer from '../place-offer/place-offer';
import { PlaceOfferType } from '../../lib/types/offer-card';
import clsx from 'clsx';


type CitiesProps = {
  offers: PlaceOfferType[];
  changeActiveOfferId: (id: number) => void;
  classNames?: string[];
  offerClassName?: string;
  isSmall?: boolean;
}

function Cities({ offers, changeActiveOfferId, classNames, isSmall, offerClassName }: CitiesProps): React.JSX.Element {
  function handleMouseEnterLeave(id: number) {
    changeActiveOfferId(id);
  }

  return (
    <div className={clsx(classNames)}>
      {offers.map((card: PlaceOfferType) => (
        <PlaceOffer
          key={card.id}
          card={card}
          onMouseEnterLeave={handleMouseEnterLeave}
          className={offerClassName}
          isSmall={isSmall}
        />
      ))}
    </div>
  );
}

export default Cities;
