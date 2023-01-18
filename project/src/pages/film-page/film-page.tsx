import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { getFilm } from '../../mocks/films';
import { Film } from '../../types/film.type';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Tabs from '../../components/tabs/tabs';
import {getReviewsByFilmId} from '../../mocks/comments';

type FilmPageProps = {
  films: Film[];
};

const FilmPage: FC<FilmPageProps> = (props) => {
  const {films} = props;
  const {id} = useParams();
  const film = getFilm(Number(id));
  const filtredFilms = films.filter((x) => x.genre === film.genre);
  const reviews = getReviewsByFilmId(Number(film.id));

  return (
    <>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={film?.backgroundImage} alt={film?.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <a href={'/'} className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className='film-card__buttons'>
                <button className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'>
                    </use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'>
                    </use>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>9</span>
                </button>
                <Link to={`/films/${film?.id}/review`} className='btn film-card__button'>Add review </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img src={film.posterImage} alt={film.name} width='218' height='327'/>
            </div>
            <Tabs film={film} reviews={reviews}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <FilmList films={filtredFilms}/>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
export default FilmPage;
