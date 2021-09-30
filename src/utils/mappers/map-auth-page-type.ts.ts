import { useRouter } from 'next/router';

import { AuthPagesTypesEnum } from '../../configs/auth.config';
import { RoutePathsEnum } from '../../configs/routes.config';

export const mapAuthPageType = (): AuthPagesTypesEnum | null => {
  const { route } = useRouter();

  let page: AuthPagesTypesEnum | null = null;

  switch (route) {
    case RoutePathsEnum.AUTH_SIGN_IN:
      page = AuthPagesTypesEnum.SIGN_IN;
      break;

    case RoutePathsEnum.AUTH_SIGN_UP:
      page = AuthPagesTypesEnum.SIGN_UP;
      break;

    case RoutePathsEnum.AUTH_RESET_PASSWORD:
      page = AuthPagesTypesEnum.RESET_PASSWORD;
      break;

    case RoutePathsEnum.AUTH_NEW_PASSWORD:
      page = AuthPagesTypesEnum.NEW_PASSWORD;
      break;

    case RoutePathsEnum.AUTH_VERIFY_EMAIL:
      page = AuthPagesTypesEnum.VERIFY_EMAIL;
      break;

    default:
      break;
  }

  return page;
};
