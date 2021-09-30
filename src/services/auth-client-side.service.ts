import { Session } from 'inspector';
import Cookie from 'js-cookie';

import { REFRESH_TOKEN_NAME, TOKEN_NAME } from '../configs/system.config';

type Storage = 'local' | 'cookie';

const setAccessToken = (token: string, storage: Storage = 'cookie'): void => {
  if (storage === 'cookie') {
    Cookie.set(TOKEN_NAME, token);
  } else {
    localStorage.setItem(TOKEN_NAME, token);
  }
};

const setTokens = (
  accessToken: string,
  refreshToken: string,
  storage: Storage = 'cookie'
): void => {
  if (storage === 'cookie') {
    Cookie.set(REFRESH_TOKEN_NAME, refreshToken);
    Cookie.set(TOKEN_NAME, accessToken);
  } else {
    localStorage.setItem(REFRESH_TOKEN_NAME, refreshToken);
    localStorage.setItem(TOKEN_NAME, accessToken);
  }
};

const getAccessToken = (
  storage: Storage = 'cookie'
): string | null | undefined => {
  if (storage === 'cookie') {
    return Cookie.get(TOKEN_NAME);
  } else {
    return localStorage.getItem(TOKEN_NAME);
  }
};

const getRefreshToken = (
  storage: Storage = 'cookie'
): string | null | undefined => {
  if (storage === 'cookie') {
    return Cookie.get(REFRESH_TOKEN_NAME);
  } else {
    return localStorage.getItem(REFRESH_TOKEN_NAME);
  }
};

const unsetAccessToken = (storage: Storage = 'cookie'): void => {
  if (storage === 'cookie') {
    return Cookie.remove(TOKEN_NAME);
  } else {
    return localStorage.removeItem(TOKEN_NAME);
  }
};

const setRole = (role: string, storage: Storage = 'cookie'): void => {
  if (storage === 'cookie') {
    Cookie.set('Role', role);
  } else {
    localStorage.setItem('Role', role);
  }
};

const getRole = (storage: Storage = 'cookie'): string | null | undefined => {
  if (storage === 'cookie') {
    return Cookie.get('Role');
  } else {
    return localStorage.getItem('Role');
  }
};

const unsetRole = (storage: Storage = 'cookie'): void => {
  if (storage === 'cookie') {
    Cookie.remove('Role');
  } else {
    return localStorage.removeItem('Role');
  }
};

const calculateExpiresAtDate = (expiresIn: number): number => {
  return expiresIn * 1000 + new Date().getTime();
};

const getExpiresAtDate = (): number | null => {
  const expiresAt = localStorage.getItem('expires_at');

  if (expiresAt) return parseInt(expiresAt, 10);
  return null;
};

const isAuthenticated = (): boolean => {
  const expiresAt = getExpiresAtDate();

  if (expiresAt) {
    return new Date().getTime() < expiresAt;
  }

  return false;
};

const setSessionLocalStorage = (token: string, expiresAt: number): void => {
  localStorage.setItem('token', token);
  localStorage.setItem('expires_at', expiresAt.toString());
};

const setSessionCookie = (session: Session): void => {
  Cookie.remove('session');
  Cookie.set('session', session, { expires: 14 });
};

const getSessionCookie = (): string | Record<string, any> => {
  const sessionCookie = Cookie.get('session');

  if (sessionCookie === undefined) {
    return {};
  } else {
    return JSON.parse(sessionCookie);
  }
};

export default {
  calculateExpiresAtDate,
  setSessionLocalStorage,
  unsetAccessToken,
  getSessionCookie,
  setSessionCookie,
  isAuthenticated,
  getRefreshToken,
  setAccessToken,
  getAccessToken,
  setTokens,
  unsetRole,
  setRole,
  getRole,
};
