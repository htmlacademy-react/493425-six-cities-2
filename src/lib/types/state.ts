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
  User: 'USER',
  Favorites: 'FAVORITES',
  Navigation: 'NAVIGATION'
} as const;

export type OffersDataType = {
  city: string;
  offers: PlaceOfferType[];
  isOffersLoading: boolean;
  sorting: SortingType;
};

export type OfferDataType = {
  activeOfferId: string;
  offer: OfferDetailType | null;
  offerNearPlaces: PlaceOfferType[];
  offerReviews: ReviewType[];
  isReviewUploading: boolean;
  reviewUploadingError: string;
};

export type UserType = {
  user: UserDataType | null;
  authorizationStatus: AuthorizationStatusType;
  authorizationError: string;
  isAuthorizationLoading: boolean;
};

export type FavoritesDataType = {
  favorites: PlaceOfferType[];
};
