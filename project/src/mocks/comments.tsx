import {Review} from '../types/review-type';

export const reviews: Review[] = [
  {
    id: 1,
    filmId: 1,
    text: 'Кайф',
    publicationDate: '18/01/2023 17:00',
    rating: 10,
    user: {
      id: 1,
      name: 'Лёня'
    }
  },
  {
    id: 2,
    filmId: 2,
    text: 'Не кайф',
    publicationDate: '18/01/2023 17:00',
    rating: 2,
    user: {
      id: 2,
      name: 'Вася'
    }
  },
  {
    id: 3,
    filmId: 3,
    text: 'Не смотрел',
    publicationDate: '18/01/2023 17:00',
    rating: 10,
    user: {
      id: 3,
      name: 'Вова'
    }
  },
  {
    id: 4,
    filmId: 4,
    text: 'не понял...',
    publicationDate: '18/01/2023 17:00',
    rating: 5,
    user: {
      id: 4,
      name: 'Петя'
    }
  },
  {
    id: 5,
    filmId: 5,
    text: 'ни о чем',
    publicationDate: '18/01/2023 17:00',
    rating: 1,
    user: {
      id: 6,
      name: 'Катя'
    }
  },
  {
    id: 6,
    filmId: 6,
    text: 'Кринж',
    publicationDate: '18/01/2023 17:00',
    rating: 1,
    user: {
      id: 6,
      name: 'Владик'
    }
  },
  {
    id: 7,
    filmId: 7,
    text: 'нет слов...',
    publicationDate: '18/01/2023 17:00',
    rating: 10,
    user: {
      id: 7,
      name: 'Богдан'
    }
  },
  {
    id: 8,
    filmId: 8,
    text: 'не понял, это он мне???',
    publicationDate: '18/01/2023 17:00',
    rating: 3.5,
    user: {
      id: 8,
      name: 'Картье Бугати'
    }
  }
];

export function getReviewsByFilmId(filmId: number): Review[] {
  return reviews.filter((review?) => review.filmId === filmId);
}
