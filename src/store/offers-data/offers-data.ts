import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { NameSpace, OffersDataType } from '../../lib/types/state';
import { Sorting, SortingType } from '../../lib/types/sorting';
import { changeOfferFavoriteStatusAction, fetchOffersAction } from '../api-actions';
import { PlaceOfferType } from '../../lib/types/offer-card';
import { WritableDraft } from 'immer';

const changeFavoriteOfferState = (state: WritableDraft<OffersDataType>, actionOffer: PlaceOfferType) => {
  const offer = state.offers.find(o => o.id === actionOffer.id) as WritableDraft<PlaceOfferType>;
  offer.isFavorite = !offer.isFavorite;
};

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
      .addCase(changeOfferFavoriteStatusAction.pending, (state, action) => {
        const actionOffer = action.meta.arg.offer;
        changeFavoriteOfferState(state, actionOffer);
      })
      .addCase(changeOfferFavoriteStatusAction.rejected, (state, action) => {
        const actionOffer = action.meta.arg.offer;
        changeFavoriteOfferState(state, actionOffer);
      });
  }
});

export const {setCity, setSorting} = offersData.actions;
