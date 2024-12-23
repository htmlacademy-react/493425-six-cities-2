import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, StateType } from '../../lib/types/state';
import { getRandomItems } from '../../utils/get-random-items';

export const selectOffer = (state: StateType) => state[NameSpace.Offer].offer;
export const selectActiveOfferId = (state: StateType) => state[NameSpace.Offer].activeOfferId;
export const selectOfferReviews = (state: StateType) => state[NameSpace.Offer].offerReviews;
export const selectOfferNearPlaces = (state: StateType) => state[NameSpace.Offer].offerNearPlaces;
export const selectIsReviewUploading = (state: StateType) => state[NameSpace.Offer].isReviewUploading;
export const selectReviewUploadingError = (state: StateType) => state[NameSpace.Offer].reviewUploadingError;

export const selectRandomNearPlaces = createSelector([selectOfferNearPlaces], (nearPlaces) => getRandomItems(3, nearPlaces));
export const selectSortedOfferReviews = createSelector([selectOfferReviews], (reviews) => {
  const sortedOffers = reviews.concat();
  return sortedOffers.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});
