import { ForkEffect, takeEvery } from 'redux-saga/effects';

import { authActions } from '../../collected.actions';
import {
  createWebsocketAndInitializeListeners,
  disconnectWebsocket,
} from './start-web-socket';

export function* webSocketSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(
    [authActions.signInReq$success.type],
    createWebsocketAndInitializeListeners
  );
  yield takeEvery([authActions.signOut.type], disconnectWebsocket);
}
