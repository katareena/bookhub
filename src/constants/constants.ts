export const TIMEOUT_SHOW_ERROR = 5000;

export enum AppRoute {
  Root = '/',
  Books = 'books',
  About = '/about',
  Account = '/account',
  Favorites = '/account/favorite',
  SignIn = '/signin',
  Register = '/register',
  NoFoundPage = '*',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const PASSWORD_REGEXP = /^[0-9a-zA-Z]+$/;

export const CONTAINER_SIZE = 275;
