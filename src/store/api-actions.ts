import {AxiosError, AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute} from '../const';
import { OfferDetailType, PlaceOfferType } from '../lib/types/offer-card';
import { redirectToRoute } from './action';
import { AppDispatchType, NameSpace, StateType } from '../lib/types/state';
import { AuthInfoType } from '../lib/types/auth-data';
import { UserDataType } from '../lib/types/user-data';
import { dropToken, saveToken } from '../services/token';
import { Routing } from '../lib/types/routing';
import { ReviewType } from '../lib/types/review';
import { ReviewRequestType } from '../lib/types/review-request';
import { RequestErrorType } from '../lib/types/request-error';
import { FavoriteRequestType } from '../lib/types/favorite-request';

export const fetchOffersAction = createAsyncThunk<PlaceOfferType[], undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PlaceOfferType[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<PlaceOfferType[], undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.Favorites}/fetchFavoriteOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PlaceOfferType[]>(APIRoute.Favorite);
    return data;
  }
);

export const changeOfferFavoriteStatusAction = createAsyncThunk<OfferDetailType, FavoriteRequestType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.Favorites}/changeOfferFavoriteStatus`,
  async ({offer: { id }, status}, {dispatch, getState, rejectWithValue, extra: api}) => {
    const state = getState();
    if (state[NameSpace.User].user) {
      const {data: offer} = await api.post<OfferDetailType>(`${APIRoute.Favorite}/${id}/${status}`);
      return offer;
    } else {
      dispatch(redirectToRoute(Routing.Login));
      return rejectWithValue(null);
    }
  }
);

export const fetchOfferAction = createAsyncThunk<OfferDetailType | null, string, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/fetchOffer`,
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data: offer} = await api.get<OfferDetailType>(`${APIRoute.Offers}/${offerId}`);
      return offer;
    } catch {
      dispatch(redirectToRoute(Routing.NotFound));
      return null;
    }
  }
);

export const fetchOfferNearPlacesAction = createAsyncThunk<PlaceOfferType[], string, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/fetchOfferNearPlaces`,
  async (offerId, {extra: api}) => {
    const {data: offers} = await api.get<PlaceOfferType[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return offers;
  }
);

export const fetchOfferReviewsAction = createAsyncThunk<ReviewType[], string, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/fetchOfferReviews`,
  async (offerId, {extra: api}) => {
    const {data: reviews} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${offerId}`);
    return reviews;
  }
);

export const uploadOfferReviewAction = createAsyncThunk<ReviewType, ReviewRequestType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/uploadOfferReview`,
  async ({comment, rating, offerId}, {extra: api, rejectWithValue}) => {
    try {
      const {data: addedReview} = await api.post<ReviewType>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
      return addedReview;
    } catch (error) {
      const reviewError = ((error as AxiosError).response?.data as RequestErrorType)?.details[0].messages[0];
      return rejectWithValue(reviewError);
    }
  }
);

export const checkAuthAction = createAsyncThunk<UserDataType, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {dispatch, extra: api}) => {
    const {data: user} = await api.get<UserDataType>(APIRoute.Login);
    dispatch(fetchFavoriteOffersAction());
    return user;
  }
);

export const loginAction = createAsyncThunk<UserDataType, AuthInfoType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/login`,
  async ({email, password}, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data: user} = await api.post<UserDataType>(APIRoute.Login, {email, password});
      saveToken(user.token);
      dispatch(fetchFavoriteOffersAction());
      dispatch(redirectToRoute(Routing.Main));
      return user;
    } catch (error) {
      const authError = ((error as AxiosError).response?.data as RequestErrorType)?.details[0].messages[0];
      return rejectWithValue(authError);
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/logout`,
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
