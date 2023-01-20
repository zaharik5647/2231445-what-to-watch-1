import { Film } from './types/film.type';
import { AppRoute } from './constants/constants';
export const getFilmUrl = (film: Film): string => {
  const bodyUrl = AppRoute.Film.split(':')[0];
  return `${bodyUrl}${film.id}`;
};


export const getFormattedRunTime = (minutes: number): string => {
  const resMinutes = minutes % 60;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ${resMinutes}m`;
};
