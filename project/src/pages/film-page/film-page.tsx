import Logo from '../../components/logo/logo';
import { Film } from '../../types/film.type';
import FilmsList from '../../components/film-list/film-list';
import { Review } from '../../types/review-type';
import Tabs from '../../components/tabs/tabs';
import { useParams } from 'react-router-dom';
import UserBlock from '../../components/user-block/user-block';
import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { AppRoute, AuthorizationStatus } from '../../constants/constants';
import { StatusCodes } from 'http-status-codes';
import { AxiosError } from 'axios';
import { redirectToRoute } from '../../store/actions';
import Loader from '../../components/loader/loader';
import { api } from '../../services/api';
import MyListButton from '../../components/my-list-button/my-list-button';

const FilmPage: FC = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [film, setFilm] = useState<null | Film>(null);
  const [similarFilms, setSimilarFilms] = useState<null | Film[]>(null);
  const [reviews, setReviews] = useState<null | Review[]>(null);
  const { authorizationStatus } = useAppSelector((state) => state);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scroll({top: 0, behavior: 'smooth'});

    const fetchFilm = async () => {
      const { data: filmInfo } = await api.get<Film>(`/films/${id || -1}`);
      setFilm(filmInfo);
    };
    const fetchSimilarFilms = async () => {
      const { data: films } = await api.get<Film[]>(`/films/${id || -1}/similar`);
      setSimilarFilms(films);
    };
    const fetchFilmReviews = async () => {
      const { data: filmReviews } = await api.get<Review[]>(`/comments/${id || -1}`);
      setReviews(filmReviews);
    };

    setDataLoaded(false);
    fetchFilm()
      .then(() => fetchSimilarFilms())
      .then(() => fetchFilmReviews())
      .then(() => setDataLoaded(true))
      .catch((err: AxiosError) => {
        if (err.response && err.response.status === StatusCodes.NOT_FOUND) {
          dispatch(redirectToRoute(AppRoute.NotFound));
        }
      });
  }, [id, dispatch]);

  const handlePlayerBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!film) {
      return;
    }

    dispatch(redirectToRoute(`/player/${film.id}`));
  };

  if (!dataLoaded) {
    return <Loader />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={handlePlayerBtnClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {film && <MyListButton filmId={film.id} /> }
                {
                  authorizationStatus === AuthorizationStatus.Auth &&
                  <a href={id ? `/films/${id}/review` : '#'} className="btn film-card__button">Add review</a>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
            </div>
            {film && reviews && <Tabs film={film} reviews={reviews} />}
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {similarFilms && <FilmsList films={similarFilms.slice(0, 4)} />}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};
export default FilmPage;
