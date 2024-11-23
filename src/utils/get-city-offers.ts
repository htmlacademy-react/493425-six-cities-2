import { PlaceOfferType } from '../lib/types/offer-card';

export function getCityOffers(city: string, offers: PlaceOfferType[]) {
  return offers.filter((offer: PlaceOfferType) => offer.city.name === city);
}
