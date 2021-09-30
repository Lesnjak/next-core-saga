import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { paletteSelector } from '../store/branches/app/app.selectors';
import { PaletteTypesEnum } from '../store/branches/app/app.types';
import { appActions } from '../store/collected.actions';

/**
 * Get hook-function to use for persist application palette
 * to local storage and set app palette to app state
 */
export const usePersistPaletteLocalStorage = (): void => {
  const dispatch = useDispatch();
  const paletteFromStore = useSelector(paletteSelector);

  const getInitialPalette = () => {
    const isReturningUser = 'palette' in localStorage;

    if (isReturningUser) {
      return localStorage.getItem('palette') as PaletteTypesEnum;
    } else {
      return PaletteTypesEnum.LIGHT;
    }
  };

  const palette = getInitialPalette();

  useEffect(() => {
    localStorage.setItem('palette', palette);
    document
      .getElementsByTagName('HTML')[0]
      .setAttribute('data-palette', palette);

    if (!paletteFromStore) {
      dispatch(appActions.setPalette(palette));
    }
  }, [paletteFromStore, dispatch, palette]);
};
