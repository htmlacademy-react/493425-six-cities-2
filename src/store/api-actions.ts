import {AxiosError, AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute} from '../const';
import { OfferDetailType, PlaceOfferType } from '../lib/types/offer-card';
import { addOfferReview, clearUser, loadOffers, redirectToRoute, requireAuthorization, setAuthorizationError, setOffer, setOfferNearPlaces, setOfferReviews, setOffersLoadingStatus, setUser } from './action';
import { AppDispatchType, NameSpace, StateType } from '../lib/types/state';
import { AuthorizationStatus } from '../lib/types/authorization';
import { AuthInfoType } from '../lib/types/auth-data';
import { UserDataType } from '../lib/types/user-data';
import { dropToken, saveToken } from '../services/token';
import { Routing } from '../lib/types/routing';
import { ReviewType } from '../lib/types/review';
import { ReviewRequestType } from '../lib/types/review-request';
import { AuthorizationErrorType } from '../lib/types/authorization-error';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<PlaceOfferType[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setOffersLoadingStatus(false));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/fetchOffer`,
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data: offer} = await api.get<OfferDetailType>(`${APIRoute.Offers}/${offerId}`);
      dispatch(setOffer(offer));
    } catch {
      dispatch(redirectToRoute(Routing.NotFound));
    }
  },
);

export const fetchOfferNearPlacesAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/fetchOfferNearPlaces`,
  async (offerId, {dispatch, extra: api}) => {
    const {data: offers} = await api.get<PlaceOfferType[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(setOfferNearPlaces(offers));
  },
);

export const fetchOfferReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/fetchOfferReviews`,
  async (offerId, {dispatch, extra: api}) => {
    const {data: reviews} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(setOfferReviews(reviews));
  },
);

export const uploadOfferReviewAction = createAsyncThunk<void, ReviewRequestType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/uploadOfferReview`,
  async ({comment, rating, offerId}, {dispatch, extra: api}) => {
    const {data: addedReview} = await api.post<ReviewType>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    dispatch(addOfferReview(addedReview));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthInfoType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/login`,
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      dispatch(setAuthorizationError(null));
      const {data: user} = await api.post<UserDataType>(APIRoute.Login, {email, password});
      saveToken(user.token);
      dispatch(setUser(user));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(Routing.Main));
    } catch (error) {
      const authError = (error as AxiosError).response?.data;
      dispatch(setAuthorizationError(authError as AuthorizationErrorType));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/logout`,
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(clearUser());
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
