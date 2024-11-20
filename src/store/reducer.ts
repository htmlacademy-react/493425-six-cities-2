import { createReducer } from '@reduxjs/toolkit';
import { setCity, setCityOffers } from './action';
import { OFFERS } from '../mocks/offers';

const initialState = {
  city: 'Paris',
  offers: OFFERS
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setCityOffers, (state, action) => {
      state.offers = action.payload;
    });
});
