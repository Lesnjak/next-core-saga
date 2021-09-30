import { useEffect } from 'react';

import { getPageConfig } from '../utils/get-page-config';

/**
 * Get a hook-function to use Page component
 * Set body background color on each page
 */
export const useBodyBackground = (): void => {
  const { bodyBackgroundColor } = getPageConfig();

  useEffect(() => {
    if (bodyBackgroundColor) {
      document.body.style.backgroundColor = `var(${bodyBackgroundColor})`;
    }
  }, [bodyBackgroundColor]);
};
