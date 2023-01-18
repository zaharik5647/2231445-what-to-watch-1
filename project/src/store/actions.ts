import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film.type';
import {AuthorizationStatus} from '../constants/all-genres';
import {User} from '../types/user.type';
import { AppRoute } from '../constants/all-genres';


export const changeGenre = createAction<string>('changeGenre');
export const fillFilms = createAction<Film[]>('setFilms');
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
export const changeAuthorizationStatus = createAction<AuthorizationStatus>('changeAuthorizationStatus');
export const setUser = createAction<User>('setUser');
export const redirectToRoute = createAction<AppRoute | string>('redirectToRoute');
