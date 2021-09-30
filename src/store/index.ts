import { createWrapper } from 'next-redux-wrapper';
import { createLogger } from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import createSagaMiddleware, { Task } from 'redux-saga';

import {
  Action,
  configureStore,
  getDefaultMiddleware,
  PreloadedState,
  Reducer,
  Store,
} from '@reduxjs/toolkit';

import { persistConfig } from '../configs/store.config';
import { rootReducer } from '../store/root.reducer';
import { rootSaga } from '../store/root.saga';
import { RootState } from '../store/root.state';
import { isServer } from '../utils/is-server';

export interface ISagaStore extends Store {
  sagaTask?: Task;

  runSaga: () => void;
}

const persistedReducer = persistReducer<RootState>(
  persistConfig,
  rootReducer as Reducer<RootState, Action<any>>
);

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, createLogger({ collapsed: true })];

  const makeConfiguredStore = (
    reducer: Reducer,
    preloadedState: PreloadedState<Record<string, any>> = {}
  ) =>
    configureStore({
      reducer,
      middleware: [
        ...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
          thunk: false,
        }),
        ...middlewares,
      ],
      devTools: process.env.NODE_ENV !== 'production',
      preloadedState,
      enhancers: [],
    });

  const store = makeConfiguredStore(
    isServer() ? rootReducer : persistedReducer
  ) as ISagaStore;

  if (!isServer()) {
    persistStore(store);
  }

  store.runSaga = () => {
    if (store.sagaTask) {
      return;
    }

    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSaga();

  return store;
};

export const wrapper = createWrapper<ISagaStore>(makeStore);
