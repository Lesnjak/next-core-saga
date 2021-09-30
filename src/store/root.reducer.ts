import { HYDRATE } from 'next-redux-wrapper';

import { AnyAction } from '@reduxjs/toolkit';

import { combinedReducer } from './combined.reducer';
import { RootState } from './root.state';

export const rootReducer = (state: RootState, action: AnyAction): RootState => {
  if (action.type === HYDRATE) {
    const nextState: RootState = {
      ...state, // use previous states
      ...action.payload, // apply delta from hydration
    };

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
