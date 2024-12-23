import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { NameSpace, OfferDataType } from '../../lib/types/state';
import { changeOfferFavoriteStatusAction, fetchOfferAction, fetchOfferNearPlacesAction, fetchOfferReviewsAction, uploadOfferReviewAction } from '../api-actions';
import { WritableDraft } from 'immer';

const changeFavoriteOffer = (state: WritableDraft<OfferDataType>) => {
  if (state.offer) {
    state.offer.isFavorite = !state.offer.isFavorite;
  }
};

const initialState: OfferDataType = {
  activeOfferId: '',
  offer: null,
  offerNearPlaces: [],
  offerReviews: [],
  isReviewUploading: false,
  reviewUploadingError: ''
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
      .addCase(uploadOfferReviewAction.pending, (state) => {
        state.reviewUploadingError = '';
        state.isReviewUploading = true;
      })
      .addCase(uploadOfferReviewAction.rejected, (state, action) => {
        state.reviewUploadingError = action.payload as string;
        state.isReviewUploading = false;
      })
      .addCase(uploadOfferReviewAction.fulfilled, (state, action) => {
        state.offerReviews = state.offerReviews.concat(action.payload);
        state.isReviewUploading = false;
      })
      .addCase(changeOfferFavoriteStatusAction.pending, (state) => {
        changeFavoriteOffer(state);
      })
      .addCase(changeOfferFavoriteStatusAction.rejected, (state) => {
        changeFavoriteOffer(state);
      });
  }
});

export const {setActiveOfferId, clearOffer} = offerData.actions;
