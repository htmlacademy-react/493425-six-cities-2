import { createSlice } from '@reduxjs/toolkit';
import { FavoritesDataType, NameSpace } from '../../lib/types/state';
import { changeOfferFavoriteStatusAction, fetchFavoriteOffersAction } from '../api-actions';
import { FavoriteRequestType } from '../../lib/types/favorite-request';
import { WritableDraft } from 'immer';
import cloneDeep from 'lodash.clonedeep';

const changeFavoritesState = (state: WritableDraft<FavoritesDataType>, arg: FavoriteRequestType) => {
  const offer = cloneDeep(arg.offer);
  if (!offer) {
    return;
  }

  offer.isFavorite = !offer.isFavorite;
  if (offer.isFavorite) {
    state.favorites = state.favorites.concat(offer);
  } else {
    state.favorites = state.favorites.filter((o) => o.id !== offer.id);
  }
};

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
      .addCase(changeOfferFavoriteStatusAction.pending, (state, action) => {
        changeFavoritesState(state, action.meta.arg);
      })
      .addCase(changeOfferFavoriteStatusAction.rejected, (state, action) => {
        changeFavoritesState(state, action.meta.arg);
      });
  }
});
