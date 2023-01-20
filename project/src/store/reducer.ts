import { createReducer } from '@reduxjs/toolkit';
import {
  changeAuthorizationStatus,
  changeGenre,
  fillFilms,
  setDataLoadedStatus,
  setFavouriteFilms,
  setUser
} from './actions';
import { Film } from '../types/film.type';
import { ALL_GENRES, AuthorizationStatus } from '../constants/constants';
import { User } from '../types/user.type';

type AppState = {
  films: Film[];
  activeGenre: string;
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User | null;
  favouriteFilms: Film[];
};

const initialState: AppState = {
  activeGenre: ALL_GENRES,
  films: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  favouriteFilms: []

};
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(fillFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setFavouriteFilms, (state, action) => {
      state.favouriteFilms = action.payload;
    });
});
