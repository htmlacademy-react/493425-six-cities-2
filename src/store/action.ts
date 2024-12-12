import { createAction } from '@reduxjs/toolkit';
import { OfferDetailType, PlaceOfferType } from '../lib/types/offer-card';
import { SortingType } from '../lib/types/sorting';
import { NameSpace } from '../lib/types/state';
import { AuthorizationStatusType } from '../lib/types/authorization';
import { RoutingType } from '../lib/types/routing';
import { ReviewType } from '../lib/types/review';
import { UserDataType } from '../lib/types/user-data';
import { AuthorizationErrorType } from '../lib/types/authorization-error';

export const setUser = createAction<UserDataType>(`${NameSpace.User}/setUser`);
export const clearUser = createAction(`${NameSpace.User}/clearUser`);
export const setCity = createAction<string>(`${NameSpace.Offers}/setCity`);
export const setSorting = createAction<SortingType>(`${NameSpace.Offers}/setSorting`);
export const setActiveOfferId = createAction<string>(`${NameSpace.Offer}/setActiveId`);
export const loadOffers = createAction<PlaceOfferType[]>(`${NameSpace.Offer}/loadOffers`);
export const setOffersLoadingStatus = createAction<boolean>(`${NameSpace.Offers}/setLoadingStatus`);
export const requireAuthorization = createAction<AuthorizationStatusType>(`${NameSpace.User}/requireAuthorization`);
export const setAuthorizationError = createAction<AuthorizationErrorType | null>(`${NameSpace.User}/setAuthorizationError`);
export const redirectToRoute = createAction<RoutingType>(`${NameSpace.User}/redirectToRoute`);
export const setOffer = createAction<OfferDetailType>(`${NameSpace.Offer}/setOffer`);
export const clearOffer = createAction(`${NameSpace.Offer}/clearOffer`);
export const setOfferNearPlaces = createAction<PlaceOfferType[]>(`${NameSpace.Offer}/setOfferNearPlaces`);
export const setOfferReviews = createAction<ReviewType[]>(`${NameSpace.Offer}/setOfferReviews`);
export const addOfferReview = createAction<ReviewType>(`${NameSpace.Offer}/addOfferReview`);

