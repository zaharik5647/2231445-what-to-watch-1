export type Film = {
  id: number;
  name: string;
  description: string;
  genre: string;
  released: number;
  scoresCount: number;
  previewImage: string;
  previewVideoLink: string;
  videoLink: string;
  starring: string[];
  director: string;
  runTime: number;
  rating: number;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  isFavorite: boolean;
  isPromo?: boolean;
}
