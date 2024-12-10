import { PlaceOfferType } from '../lib/types/offer-card';
import { Sorting, SortingType } from '../lib/types/sorting';

export function sortOffers(sorting: SortingType, offers: PlaceOfferType[]) {
  const newOffers = offers.concat();
  switch(sorting) {
    case Sorting.PriceHigh:
      return newOffers.sort((a: PlaceOfferType, b: PlaceOfferType) => b.price - a.price);
    case Sorting.PriceLow:
      return newOffers.sort((a: PlaceOfferType, b: PlaceOfferType) => a.price - b.price);
    case Sorting.Top:
      return newOffers.sort((a: PlaceOfferType, b: PlaceOfferType) => b.rating - a.rating);
    case Sorting.Popular:
    default:
      return newOffers;
  }
}
