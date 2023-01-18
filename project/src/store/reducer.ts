import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, fillFilms, setDataLoadedStatus } from './actions';
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
      state.activeGenre = action.payload;
    })
    .addCase(fillFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});
