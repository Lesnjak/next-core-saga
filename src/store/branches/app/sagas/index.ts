import { fork, ForkEffect } from 'redux-saga/effects';

import { checkPaletteWatcher } from './check-palette.saga';
import { clearAppPersistStateWatcher } from './clear-app-persist-state.saga';
import { initializeAppWatcher } from './initialize-app.saga';

export function* appBranchSaga(): Generator<ForkEffect<void>, void, unknown> {
  yield fork(clearAppPersistStateWatcher);
  yield fork(initializeAppWatcher);
  yield fork(checkPaletteWatcher);
}
