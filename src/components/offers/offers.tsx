import PlaceOffer from '../place-offer/place-offer';
import { PlaceOfferType } from '../../lib/types/offer-card';
import clsx from 'clsx';
import { useAppDispatch } from '../../hooks';
import { setActiveOfferId } from '../../store/action';

type OffersProps = {
  offers: PlaceOfferType[];
  classNames?: string[];
  offerClassName?: string;
  isSmall?: boolean;
}

function Offers({ offers, classNames, isSmall, offerClassName }: OffersProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  function handleMouseEnterLeave(id: string) {
    dispatch(setActiveOfferId(id));
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

export default Offers;
