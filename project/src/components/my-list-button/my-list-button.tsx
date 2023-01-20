import { useState, MouseEvent } from 'react';
import { api } from '../../services/api';
import { Film } from '../../types/film.type';
import { redirectToRoute } from '../../store/actions';
import { store } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { APIRoute, AuthorizationStatus } from '../../constants/all-genres';
import { fetchFavouriteFilms } from '../../store/api.action';

type Props = {
  filmId: number;
};


function MyListButton({ filmId }: Props): JSX.Element {
  const { favoriteFilms: favoriteFilms, authorizationStatus } = useAppSelector((state) => state);
  const [isFavorite, setFavorite] = useState(favoriteFilms.some((film) => film.id === filmId));

  const dispatch = useAppDispatch();

  const handleMyListClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (authorizationStatus !== AuthorizationStatus.Auth){
      dispatch(redirectToRoute(APIRoute.Login));
      return;
    }

    const changeFilmFavoriteStatus = async () => {
      const { data: changedFilm } = await api.post<Film>(`${APIRoute.Favorite}/${filmId}/${isFavorite ? 0 : 1}`);

      setFavorite(changedFilm.isFavorite);
    };

    changeFilmFavoriteStatus()
      .then(() => store.dispatch(fetchFavouriteFilms()));
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleMyListClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        {isFavorite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}

export default MyListButton;
