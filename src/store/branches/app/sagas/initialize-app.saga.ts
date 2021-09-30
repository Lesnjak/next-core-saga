import { ForkEffect, takeEvery } from 'redux-saga/effects';

import { logger } from '../../../../utils/logger';
import { appActions } from '../../../collected.actions';

export function* initializeAppWorker(): Generator<void, void, unknown> {
  yield logger('[Initialize application]');
}

export function* initializeAppWatcher(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(appActions.initializeApp.type, initializeAppWorker);
}
