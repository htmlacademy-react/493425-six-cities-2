import { createSlice } from '@reduxjs/toolkit';
import { FavoritesDataType, NameSpace } from '../../lib/types/state';
import { changeOfferFavoriteStatusAction, fetchFavoriteOffersAction } from '../api-actions';
import { WritableDraft } from 'immer';
import cloneDeep from 'lodash.clonedeep';
import { PlaceOfferType } from '../../lib/types/offer-card';

type ChangeFavoritesStateArguments = {
  state: WritableDraft<FavoritesDataType>;
  isFavorite: boolean;
  offer: PlaceOfferType;
}

const changeFavoritesState = ({ state, isFavorite, offer }: ChangeFavoritesStateArguments) => {
  const newOffer = cloneDeep(offer);
  newOffer.isFavorite = isFavorite;

  if (isFavorite) {
    state.favorites = state.favorites.concat(newOffer);
  } else {
    state.favorites = state.favorites.filter((favoriteOffer) => favoriteOffer.id !== newOffer.id);
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
        changeFavoritesState({
          state,
          isFavorite: Boolean(action.meta.arg.status),
          offer: action.meta.arg.offer
        });
      })
      .addCase(changeOfferFavoriteStatusAction.rejected, (state, action) => {
        changeFavoritesState({
          state,
          isFavorite: !action.meta.arg.status,
          offer: action.meta.arg.offer
        });
      });
  }
});
