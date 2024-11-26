import { createReducer } from '@reduxjs/toolkit';
import { setActiveOfferId, setCity, setCityOffers, setSorting } from './action';
import { OFFERS } from '../mocks/offers';
import { Sorting, SortingType } from '../lib/types/sorting';
import { PlaceOfferType } from '../lib/types/offer-card';

const initialState: {
  city: string;
  offers: PlaceOfferType[];
  offersLength: number;
  sorting: SortingType;
  activeOfferId: string;
} = {
  city: 'Paris',
  offers: OFFERS,
  offersLength: OFFERS.length,
  sorting: Sorting.Popular,
  activeOfferId: ''
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setCityOffers, (state, action) => {
      state.offers = action.payload;
      state.offersLength = action.payload.length;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    });
});
