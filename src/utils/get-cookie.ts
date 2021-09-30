import Cookie from 'js-cookie';
import getCookies from 'next-cookies';

import { GetSSPContext } from './with-auth';

/**
 * Get cookie on server or client
 */
export const getCookie = (
  context: GetSSPContext,
  cookieName: string
): string | null => {
  if (context.req) {
    return getCookies(context)[cookieName] || null;
  }

  return Cookie.get(cookieName) || null;
};
