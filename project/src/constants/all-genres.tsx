export const ALL_GENRES = 'All Genres';
export const TABS = ['Overview', 'Details', 'Reviews'];

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout'
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export enum AppRoute {
  MAIN = '/',
  SIGNIN = '/login',
  MYLIST = '/mylist',
  FILM = '/films/:id',
  ADDREVIEW = '/films/:id/review',
  PLAYER = '/player/:id',
  NOTFOUND = '*',
  FILMPREFIX = '/films'
}


