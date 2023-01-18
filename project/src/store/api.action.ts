import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state.type';
import { Film } from '../types/film.type';
import { APIRoute} from '../constants/all-genres';
import { fillFilms, setDataLoadedStatus } from './actions';

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
