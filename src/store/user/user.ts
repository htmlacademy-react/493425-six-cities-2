import {createSlice} from '@reduxjs/toolkit';
import { NameSpace, UserType } from '../../lib/types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { AuthorizationStatus } from '../../lib/types/authorization';

const initialState: UserType = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationError: '',
  isAuthorizationLoading: true
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.isAuthorizationLoading = true;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.isAuthorizationLoading = false;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isAuthorizationLoading = false;
      })
      .addCase(loginAction.pending, (state) => {
        state.authorizationError = '';
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.authorizationError = action.payload as string;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
