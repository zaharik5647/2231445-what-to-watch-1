import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state.type';
import { Film } from '../types/film.type';
import { APIRoute, AuthorizationStatus } from '../constants/all-genres';
import { fillFilms, setDataLoadedStatus, changeAuthorizationStatus, setUser, setFavouriteFilms } from './actions';
import { saveToken, dropToken } from '../services/token';
import { User } from '../types/user.type';
import { AuthData } from '../types/auth.data.type';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(false));
    const { data } = await api.get<Film[]>(APIRoute.Films);
    dispatch(fillFilms(data));
    dispatch(setDataLoadedStatus(true));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data: user } = await api.get<User>(APIRoute.Login);
      dispatch(setUser(user));
      dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const { data: user } = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(user.token);
    dispatch(setUser(user));
    dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(setFavouriteFilms([]));
    dropToken();
  }
);

export const fetchFavouriteFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    const { data: favouriteFilms } = await api.get<Film[]>(APIRoute.Favorite);
    dispatch(setFavouriteFilms(favouriteFilms));
  }
);
