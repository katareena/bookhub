export const TIMEOUT_SHOW_ERROR = 5000;

export enum AppRoute {
  Root = '/',
  MyAccount = '/myaccount',
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
