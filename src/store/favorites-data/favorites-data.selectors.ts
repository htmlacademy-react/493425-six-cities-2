import { NameSpace, StateType } from '../../lib/types/state';

export const selectFavoriteOffers = (state: StateType) => state[NameSpace.Favorites].favorites;
