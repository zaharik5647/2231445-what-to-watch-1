import {useEffect, useState} from 'react';
import VideoPlayer from '../video-player/video-player';
import { Link } from 'react-router-dom';
import {Film} from '../../types/film.type';


export type FilmCardProps = {
  film: Film;
  onHover: (film: Film) => void;
}

function FilmCard({film, onHover}: FilmCardProps): JSX.Element {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isNeedVideoToPlay, setIsNeedVideoToPlay] = useState(false);

  useEffect(() => {
    let needUpdate = true;

    if (isNeedVideoToPlay) {
      setTimeout(() => needUpdate && setIsVideoPlaying(true), 1000);
    }

    return () => {needUpdate = false;};
  }, [isNeedVideoToPlay]);

  return(
    <Link
      to={`/films/${film.id}`}
      className="small-film-card catalog__films-card small-film-card__link"
      onMouseEnter={() => {
        onHover(film);
        setIsNeedVideoToPlay(true);
      }}
      onMouseLeave={() => {
        onHover(film);
        setIsNeedVideoToPlay(false);
        setIsVideoPlaying(false);
      }}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          film={film}
          isPlaying={isVideoPlaying}
          needSound
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        {film.name}
      </h3>
    </Link>
  );
}
export default FilmCard;
