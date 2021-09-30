import { NextPageContext } from 'next';
import Router from 'next/router';

import { NOT_AUTH_REDIRECT, RoutePathsEnum } from '../configs/routes.config';
import { TOKEN_NAME } from '../configs/system.config';
import { AuthRedirect, NotAuthRedirect } from '../typings/routes.types';
import { isServer } from './is-server';

export type SspRedirect = {
  redirect: {
    permanent: boolean;
    destination: RoutePathsEnum;
  };
};

/**
 * Route common redirect based on next context
 */
export const redirect = (
  path: NotAuthRedirect | AuthRedirect | RoutePathsEnum,
  context?: NextPageContext,
  deleteToken?: boolean
): void => {
  if (isServer() && context && context.res) {
    context.res.writeHead(302, {
      Location: path,
      ...(deleteToken
        ? {
            'Set-Cookie': `${TOKEN_NAME}=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`,
          }
        : {}),
    });

    context.res.end();
  } else {
    Router.replace(path as string);
  }
};

/**
 * Server side props redirect object
 */
export const sspRedirect = (
  to: RoutePathsEnum = NOT_AUTH_REDIRECT,
  permanent = false
): SspRedirect => {
  return {
    redirect: {
      destination: to,
      permanent: permanent,
    },
  };
};
