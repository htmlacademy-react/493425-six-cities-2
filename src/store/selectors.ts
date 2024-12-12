import { createSelector } from '@reduxjs/toolkit';
import { StateType } from '../lib/types/state';
import { getCityOffers } from '../utils/get-city-offers';
import { sortOffers } from '../utils/sort-offers';

const selectOffers = (state: StateType) => state.offers;
const selectSorting = (state: StateType) => state.sorting;
const selectCity = (state: StateType) => state.city;

export const selectCityOffers = createSelector([selectOffers, selectSorting, selectCity], (offers, sorting, city) => sortOffers(sorting, getCityOffers(city, offers)));
