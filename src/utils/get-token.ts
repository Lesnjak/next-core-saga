import Cookie from 'js-cookie';

import { TOKEN_NAME } from '../configs/system.config';
import { getCookie } from './get-cookie';
import { GetSSPContext } from './with-auth';

/**
 * Get token on server or client
 */
export const getToken = (context?: GetSSPContext): string | null => {
  if (context) {
    return getCookie(context, TOKEN_NAME);
  }

  return Cookie.get(TOKEN_NAME) || null;
};
