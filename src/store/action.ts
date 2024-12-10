import { createAction } from '@reduxjs/toolkit';
import { PlaceOfferType } from '../lib/types/offer-card';
import { SortingType } from '../lib/types/sorting';
import { NameSpace } from '../lib/types/state';
import { AuthorizationStatusType } from '../lib/types/authorization';
import { RoutingType } from '../lib/types/routing';

export const setCity = createAction<string>(`${NameSpace.Offers}/setCity`);
export const setSorting = createAction<SortingType>(`${NameSpace.Offers}/setSorting`);
export const setActiveOfferId = createAction<string>(`${NameSpace.Offer}/setActiveId`);
export const loadOffers = createAction<PlaceOfferType[]>(`${NameSpace.Offer}/loadOffers`);
export const setOffersLoadingStatus = createAction<boolean>(`${NameSpace.Offers}/setLoadingStatus`);
export const requireAuthorization = createAction<AuthorizationStatusType>(`${NameSpace.User}/requireAuthorization`);
export const redirectToRoute = createAction<RoutingType>(`${NameSpace.User}/redirectToRoute`);
