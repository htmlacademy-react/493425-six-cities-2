import { PlaceOfferType } from './offer-card';

export type FavoriteRequestType = {
  offer: PlaceOfferType;
  status: 1 | 0;
};
