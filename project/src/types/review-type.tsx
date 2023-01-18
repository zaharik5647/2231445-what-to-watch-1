export type Review = {
  id: number;
  filmId: number;
  comment: string;
  publicationDate: string;
  rating: number;
  user: {
    id: number;
    name: string;
  };
}
