import { PlaceOfferType } from '../lib/types/offer-card';

export const getCityOffers = (city: string, offers: PlaceOfferType[]) => offers.filter((offer: PlaceOfferType) => offer.city.name === city);
