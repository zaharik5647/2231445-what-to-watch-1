import { Film } from '../../types/film.type';

export type Props = {
  film: Film;
}

enum RatingName {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very Good',
  Awesome = 'Awesome'
}


function OverviewTab({ film } : Props): JSX.Element {
  const getTextRating = (rating: number): RatingName => {
    if (film.scoresCount > 0) {
      if (rating >= 0 && rating < 3) {
        return RatingName.Bad;
      } else if (rating >= 3 && rating < 5) {
        return RatingName.Normal;
      } else if (rating >= 5 && rating < 8) {
        return RatingName.Good;
      } else if (rating >= 8 && rating < 10) {
        return RatingName.VeryGood;
      }
      return RatingName.Awesome;
    }
    else {
      return RatingName.Awesome;
    }
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getTextRating(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {film.description}

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default OverviewTab;
