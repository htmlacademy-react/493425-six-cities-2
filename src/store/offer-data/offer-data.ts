import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { NameSpace, OfferDataType } from '../../lib/types/state';
import { changeOfferFavoriteStatusAction, fetchOfferAction, fetchOfferNearPlacesAction, fetchOfferReviewsAction, uploadOfferReviewAction } from '../api-actions';
import { WritableDraft } from 'immer';
import { getRandomItems } from '../../utils/get-random-items';
import { PlaceOfferType } from '../../lib/types/offer-card';
import { NEAR_PLACES_NUMBER } from '../../const';

const changeFavoriteOffer = (state: WritableDraft<OfferDataType>, offer: PlaceOfferType) => {
  if (state.offer && offer && offer.id === state.offer.id) {
    state.offer.isFavorite = !state.offer.isFavorite;
  }
  if (offer) {
    state.offerNearPlaces = state.offerNearPlaces.map((nearOffer) => {
      if (offer.id === nearOffer.id) {
        nearOffer.isFavorite = !nearOffer.isFavorite;
      }
      return nearOffer;
    });
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
        state.offerNearPlaces = getRandomItems(NEAR_PLACES_NUMBER, action.payload);
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
      .addCase(changeOfferFavoriteStatusAction.pending, (state, action) => {
        changeFavoriteOffer(state, action.meta.arg.offer);
      })
      .addCase(changeOfferFavoriteStatusAction.rejected, (state, action) => {
        changeFavoriteOffer(state, action.meta.arg.offer);
      });
  }
});

export const {setActiveOfferId, clearOffer} = offerData.actions;
