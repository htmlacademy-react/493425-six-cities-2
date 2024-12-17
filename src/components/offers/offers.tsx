import PlaceOffer from '../place-offer/place-offer';
import { PlaceOfferType } from '../../lib/types/offer-card';
import clsx from 'clsx';
import { useAppDispatch } from '../../hooks';
import { memo, useCallback } from 'react';
import { setActiveOfferId } from '../../store/offer-data/offer-data';

type OffersProps = {
  offers: PlaceOfferType[];
  classNames?: string[];
  offerClassName?: string;
  isSmall?: boolean;
  useHover?: boolean;
}

function Offers({ offers, classNames, isSmall, offerClassName, useHover }: OffersProps) {
  const dispatch = useAppDispatch();
  const handleMouseEnterLeave = useCallback((id: string) => {
    if (useHover) {
      dispatch(setActiveOfferId(id));
    }
  }, [dispatch, useHover]);

  return (
    <div className={clsx(classNames)}>
      {offers.map((card: PlaceOfferType) => (
        <PlaceOffer
          key={card?.id}
          card={card}
          onMouseEnterLeave={handleMouseEnterLeave}
          className={offerClassName}
          isSmall={isSmall}
        />
      ))}
    </div>
  );
}

const MemoOffers = memo(Offers);
export default MemoOffers;
