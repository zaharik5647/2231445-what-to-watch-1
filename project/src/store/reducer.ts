import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, fillFilms, setFilmsLoadedStatus } from './actions';
import { Film } from '../types/film.type';
import {ALL_GENRES} from '../constants/all-genres';

type AppState = {
  films: Film[];
  activeGenre: string;
  isDataLoaded: boolean;
};

const initialState: AppState = {
  activeGenre: ALL_GENRES,
  films: [],
  isDataLoaded: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload.genre;
    })
    .addCase(fillFilms, (state, action) => {
      state.films = action.payload.films;
    })
    .addCase(setFilmsLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});
