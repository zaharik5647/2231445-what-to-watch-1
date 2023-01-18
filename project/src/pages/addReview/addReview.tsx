import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import {Film} from '../../types/film.type';
import {Link} from 'react-router-dom';
import UserBlock from '../../components/user-block/user-block';

type Props = {
  film: Film;
}
function AddReview({film}: Props): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327"/>
        </div>
      </div>
      <div className="add-review">
        <ReviewForm/>
      </div>
    </section>
  );
}
export default AddReview;
