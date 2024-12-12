import { createReducer } from '@reduxjs/toolkit';
import { addOfferReview, clearOffer, clearUser, loadOffers, requireAuthorization, setActiveOfferId, setAuthorizationError, setCity, setOffer, setOfferNearPlaces, setOfferReviews, setOffersLoadingStatus, setSorting, setUser } from './action';
import { Sorting, SortingType } from '../lib/types/sorting';
import { OfferDetailType, PlaceOfferType } from '../lib/types/offer-card';
import { AuthorizationStatus, AuthorizationStatusType } from '../lib/types/authorization';
import { ReviewType } from '../lib/types/review';
import { UserDataType } from '../lib/types/user-data';
import { AuthorizationErrorType } from '../lib/types/authorization-error';

const initialState: {
  user: UserDataType | null;
  city: string;
  offers: PlaceOfferType[];
  isOffersLoading: boolean;
  sorting: SortingType;
  activeOfferId: string;
  offer: OfferDetailType | null;
  offerNearPlaces: PlaceOfferType[];
  offerReviews: ReviewType[];
  authorizationStatus: AuthorizationStatusType;
  authorizationError: AuthorizationErrorType | null;
} = {
  user: null,
  city: 'Paris',
  offers: [],
  isOffersLoading: false,
  sorting: Sorting.Popular,
  activeOfferId: '',
  offer: null,
  offerNearPlaces: [],
  offerReviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationError: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(clearUser, (state) => {
      state.user = null;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAuthorizationError, (state, action) => {
      state.authorizationError = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOfferNearPlaces, (state, action) => {
      state.offerNearPlaces = action.payload;
    })
    .addCase(setOfferReviews, (state, action) => {
      state.offerReviews = action.payload;
    })
    .addCase(addOfferReview, (state, action) => {
      state.offerReviews = state.offerReviews.concat(action.payload);
    })
    .addCase(clearOffer, (state) => {
      state.offer = null;
      state.offerNearPlaces = [];
      state.offerReviews = [];
    });
});
