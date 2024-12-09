import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, setActiveOfferId, setCity, setOffersLoadingStatus, setSorting } from './action';
import { Sorting, SortingType } from '../lib/types/sorting';
import { PlaceOfferType } from '../lib/types/offer-card';

const initialState: {
  city: string;
  cityOffers: PlaceOfferType[];
  offers: PlaceOfferType[];
  isOffersLoading: boolean;
  cityOffersLength: number;
  sorting: SortingType;
  activeOfferId: string;
} = {
  city: 'Paris',
  cityOffers: [],
  offers: [],
  isOffersLoading: false,
  cityOffersLength: 0,
  sorting: Sorting.Popular,
  activeOfferId: ''
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.cityOffersLength = state.offers.filter((o: PlaceOfferType) => o.city.name === state.city).length;
    })
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
      state.cityOffersLength = state.offers.filter((o: PlaceOfferType) => o.city.name === state.city).length;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});
