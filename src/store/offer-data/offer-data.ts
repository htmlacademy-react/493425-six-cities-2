import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { NameSpace, OfferDataType } from '../../lib/types/state';
import { fetchOfferAction, fetchOfferNearPlacesAction, fetchOfferReviewsAction, uploadOfferReviewAction } from '../api-actions';

const initialState: OfferDataType = {
  activeOfferId: '',
  offer: null,
  offerNearPlaces: [],
  offerReviews: []
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setActiveOfferId: (state, action: PayloadAction<string>) => {
      state.activeOfferId = action.payload;
    },
    clearOffer: (state) => {
      state.offer = null;
      state.offerNearPlaces = [];
      state.offerReviews = [];
      state.activeOfferId = '';
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(fetchOfferNearPlacesAction.fulfilled, (state, action) => {
        state.offerNearPlaces = action.payload;
      })
      .addCase(fetchOfferReviewsAction.fulfilled, (state, action) => {
        state.offerReviews = action.payload;
      })
      .addCase(uploadOfferReviewAction.fulfilled, (state, action) => {
        state.offerReviews = state.offerReviews.concat(action.payload);
      });
  }
});

export const {setActiveOfferId, clearOffer} = offerData.actions;
