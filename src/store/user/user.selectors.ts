import { StateType, NameSpace } from '../../lib/types/state';

export const selectAuthorizationStatus = (state: StateType) => state[NameSpace.User].authorizationStatus;
export const selectAuthorizationError = (state: StateType) => state[NameSpace.User].authorizationError;
export const selectUser = (state: StateType) => state[NameSpace.User].user;
export const selectAuthorizationLoading = (state: StateType) => state[NameSpace.User].isAuthorizationLoading;
