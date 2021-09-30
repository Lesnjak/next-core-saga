import { IPagesCommonConfig } from '../typings/pages-config.interfaces';
import { RoutePathsEnum } from './routes.config';

/**
 * Set common config for application pages
 */
export const pagesCommonConfig: IPagesCommonConfig = {
  [RoutePathsEnum.AUTH_RESET_PASSWORD]: {
    bodyBackgroundColor: '--bgPrimary',
  },
  [RoutePathsEnum.AUTH_NEW_PASSWORD]: {
    bodyBackgroundColor: '--bgPrimary',
  },
  [RoutePathsEnum.AUTH_VERIFY_EMAIL]: {
    bodyBackgroundColor: '--bgPrimary',
  },
  [RoutePathsEnum.AUTH_SIGN_IN]: {
    bodyBackgroundColor: '--bgPrimary',
  },
  [RoutePathsEnum.AUTH_SIGN_UP]: {
    bodyBackgroundColor: '--bgPrimary',
  },
  [RoutePathsEnum.MAIN_DASHBOARD]: {
    bodyBackgroundColor: '--bgPrimary',
  },
  [RoutePathsEnum.HOME]: {
    bodyBackgroundColor: '--bgPrimary',
  },
  default: {
    bodyBackgroundColor: '--bgSecondary',
  },
};

/**
 * Set titles config for application pages
 */
export enum PagesTitlesEnum {
  AUTH_RESET_PASSWORD = 'Reset password',
  AUTH_NEW_PASSWORD = 'New password',
  AUTH_VERIFY_EMAIL = 'Verify email',
  AUTH_SIGN_UP = 'Sign up',
  AUTH_SIGN_IN = 'Sign in',

  MAIN_DASHBOARD = 'Dashboard',
  MAIN_SETTINGS = 'Settings',

  EXAMPLE = 'Example',

  HOME = 'Home',
}
