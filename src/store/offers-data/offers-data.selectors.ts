import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, StateType } from '../../lib/types/state';
import { sortOffers } from '../../utils/sort-offers';
import { getCityOffers } from '../../utils/get-city-offers';

export const selectOffers = (state: StateType) => state[NameSpace.Offers].offers;
export const selectIsOffersLoading = (state: StateType) => state[NameSpace.Offers].isOffersLoading;
export const selectSorting = (state: StateType) => state[NameSpace.Offers].sorting;
export const selectCity = (state: StateType) => state[NameSpace.Offers].city;

export const selectCityOffers = createSelector([selectOffers, selectSorting, selectCity], (offers, sorting, city) => sortOffers(sorting, getCityOffers(city, offers)));
