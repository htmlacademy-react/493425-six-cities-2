import { createAction } from '@reduxjs/toolkit';
import { PlaceOfferType } from '../lib/types/offer-card';
import { SortingType } from '../lib/types/sorting';

export const setCity = createAction<string>('set city');
export const setCityOffers = createAction<PlaceOfferType[]>('set city offers');
export const setSorting = createAction<SortingType>('set sorting');
