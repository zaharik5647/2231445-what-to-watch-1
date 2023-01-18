import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film.type';

export const changeGenre = createAction<string>('changeGenre');
export const fillFilms = createAction<Film[]>('setFilms');
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');

