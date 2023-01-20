export const ALL_GENRES = 'All Genres';
export const TABS = ['Overview', 'Details', 'Reviews'];

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  Favorite = '/favorite',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddFilm = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/404-not-found',
  Default = '*'
}


