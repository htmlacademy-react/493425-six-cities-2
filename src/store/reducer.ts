import { createReducer } from '@reduxjs/toolkit';
import { setCity, setCityOffers, setSorting } from './action';
import { OFFERS } from '../mocks/offers';
import { Sorting, SortingType } from '../lib/types/sorting';

const initialState = {
  city: 'Paris',
  offers: OFFERS,
  sorting: Sorting.Popular as SortingType
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setCityOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    });
});
