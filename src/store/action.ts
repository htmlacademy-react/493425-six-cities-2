import { createAction } from '@reduxjs/toolkit';
import { PlaceOfferType } from '../lib/types/offer-card';

export const setCity = createAction<string>('set city');
export const setCityOffers = createAction<PlaceOfferType[]>('set city offers');
