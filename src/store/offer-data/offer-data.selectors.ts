import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, StateType } from '../../lib/types/state';
import { getRandomItems } from '../../utils/get-random-items';

export const selectOffer = (state: StateType) => state[NameSpace.Offer].offer;
export const selectActiveOfferId = (state: StateType) => state[NameSpace.Offer].activeOfferId;
export const selectOfferReviews = (state: StateType) => state[NameSpace.Offer].offerReviews;
export const selectOfferNearPlaces = (state: StateType) => state[NameSpace.Offer].offerNearPlaces;

export const selectRandomNearPlaces = createSelector([selectOfferNearPlaces], (nearPlaces) => getRandomItems(3, nearPlaces));
