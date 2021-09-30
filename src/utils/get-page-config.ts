import find from 'lodash/find';
import { useRouter } from 'next/router';

import { pagesCommonConfig } from '../configs/pages.config';
import { IPageConfig } from '../typings/pages-config.interfaces';

/**
 * Get page common config by url
 */
export const getPageConfig = (): IPageConfig => {
  const { route } = useRouter();

  return (
    find(pagesCommonConfig, (_, key) => route.includes(key)) ||
    pagesCommonConfig.default
  );
};
