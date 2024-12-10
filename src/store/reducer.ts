import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, setActiveOfferId, setCity, setOffersLoadingStatus, setSorting } from './action';
import { Sorting, SortingType } from '../lib/types/sorting';
import { PlaceOfferType } from '../lib/types/offer-card';
import { StateType } from '../lib/types/state';
import { WritableDraft } from 'immer';
import { getCityOffers } from '../utils/get-city-offers';
import { sortOffers } from '../utils/sort-offers';

function setCityOffersData(state: WritableDraft<StateType>): void {
  state.cityOffers = sortOffers(state.sorting, getCityOffers(state.city, state.offers));
  state.cityOffersLength = state.cityOffers.length;
}

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
      setCityOffersData(state);
    })
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
      setCityOffersData(state);
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
      setCityOffersData(state);
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});
