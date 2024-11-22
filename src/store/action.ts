import { createAction } from '@reduxjs/toolkit';
import { PlaceOfferType } from '../lib/types/offer-card';
import { SortingType } from '../lib/types/sorting';

export const setCity = createAction<string>('offers/setCity');
export const setCityOffers = createAction<PlaceOfferType[]>('offers/setOffers');
export const setSorting = createAction<SortingType>('offers/setSorting');
export const setActiveOfferId = createAction<string>('offers/setActiveId');
