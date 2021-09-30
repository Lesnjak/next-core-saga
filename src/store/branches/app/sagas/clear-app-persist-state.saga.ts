import { purgeStoredState } from 'redux-persist';
import { call, CallEffect, ForkEffect, takeEvery } from 'redux-saga/effects';

import { persistConfig } from '../../../../configs/store.config';
import { logger } from '../../../../utils/logger';
import { appActions } from '../../../collected.actions';

export function* clearAppPersistStateWorker(): Generator<
  void | CallEffect<unknown>,
  void,
  unknown
> {
  try {
    yield call(purgeStoredState, persistConfig);
  } catch {
    yield logger("Couldn't clear persist store.");
  }
}

export function* clearAppPersistStateWatcher(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(
    appActions.clearAppPersistState.type,
    clearAppPersistStateWorker
  );
}
