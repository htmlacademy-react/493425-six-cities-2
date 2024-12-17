import { store } from '../../store';
import { AuthorizationStatusType } from './authorization';
import { OfferDetailType, PlaceOfferType } from './offer-card';
import { ReviewType } from './review';
import { SortingType } from './sorting';
import { UserDataType } from './user-data';

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export const NameSpace = {
  Offers: 'OFFERS',
  Offer: 'OFFER',
  User: 'USER'
} as const;

export type OffersDataType = {
  city: string;
  offers: PlaceOfferType[];
  favorites: PlaceOfferType[];
  isOffersLoading: boolean;
  sorting: SortingType;
};

export type OfferDataType = {
  activeOfferId: string;
  offer: OfferDetailType | null;
  offerNearPlaces: PlaceOfferType[];
  offerReviews: ReviewType[];
};

export type UserType = {
  user: UserDataType | null;
  authorizationStatus: AuthorizationStatusType;
  authorizationError: string;
};
