import { createAction } from '@reduxjs/toolkit';
import { PlaceOfferType } from '../lib/types/offer-card';
import { SortingType } from '../lib/types/sorting';
import { NameSpace } from '../lib/types/state';

export const setCity = createAction<string>(`${NameSpace.Offers}/setCity`);
export const setCityOffers = createAction<PlaceOfferType[]>(`${NameSpace.Offers}/setOffers`);
export const setSorting = createAction<SortingType>(`${NameSpace.Offers}/setSorting`);
export const setActiveOfferId = createAction<string>(`${NameSpace.Offer}/setActiveId`);
