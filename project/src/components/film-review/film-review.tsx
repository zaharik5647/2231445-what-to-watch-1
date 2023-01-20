import { FC } from 'react';
import {Review} from '../../types/review-type';

type FilmReviewProps = {
  review: Review;
}
const formatDate = (date: string) => new Date(date).toLocaleDateString('en-us', { year:'numeric', month:'long', day:'numeric'});

const FilmReview: FC<FilmReviewProps> = (props) => {
  const { review } = props;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{formatDate(review.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating.toFixed(1)}</div>
    </div>
  );
};
export default FilmReview;
