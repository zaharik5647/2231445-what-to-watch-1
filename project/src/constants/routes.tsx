export const ROUTES = {
  MAIN: '/',
  SIGNIN: '/login',
  MYLIST: '/mylist',
  FILM: '/films/:id',
  ADDREVIEW: '/films/:id/film-review',
  PLAYER: '/player/:id',
  NOTFOUND: '*',
  FILMPREFIX: '/films'
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const SHOWN_FILMS_STEP = 8;
