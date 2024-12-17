import { createSlice } from '@reduxjs/toolkit';
import { FavoritesDataType, NameSpace } from '../../lib/types/state';
import { changeOfferFavoriteStatusAction, fetchFavoriteOffersAction } from '../api-actions';

const initialState: FavoritesDataType = {
  favorites: []
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(changeOfferFavoriteStatusAction.fulfilled, (state, action) => {
        const offer = action.payload;
        if (offer.isFavorite) {
          state.favorites = state.favorites.concat(offer);
        } else {
          state.favorites = state.favorites.filter((o) => o.id !== offer.id);
        }
      });
  }
});
