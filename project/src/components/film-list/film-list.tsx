import {useState} from 'react';
import { Film } from '../../types/film.type';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

function FilmList({films}: FilmListProps): JSX.Element {
  const [, setActive] = useState({});

  const handleFilmOnHover = (film: Film) => {
    setActive(film);
  };
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film} onHover={handleFilmOnHover}/>)}
    </div>
  );
}

export default FilmList;
