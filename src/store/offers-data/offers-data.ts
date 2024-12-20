import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { NameSpace, OffersDataType } from '../../lib/types/state';
import { Sorting, SortingType } from '../../lib/types/sorting';
import { changeOfferFavoriteStatusAction, fetchOffersAction } from '../api-actions';

const initialState: OffersDataType = {
  city: 'Paris',
  offers: [],
  isOffersLoading: false,
  sorting: Sorting.Popular
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setSorting: (state, action: PayloadAction<SortingType>) => {
      state.sorting = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
      })
      .addCase(changeOfferFavoriteStatusAction.fulfilled, (state, action) => {
        const offer = action.payload;
        state.offers = state.offers.map((o) => o.id === offer.id ? offer : o);
      });
  }
});

export const {setCity, setSorting} = offersData.actions;
