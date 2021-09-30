import Router from 'next/router';
import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeEvery,
} from 'redux-saga/effects';

import { NOT_AUTH_REDIRECT } from '../../../../configs/routes.config';
import authService from '../../../../services/auth-client-side.service';
import { logger } from '../../../../utils/logger';
import { appActions, authActions } from '../../../collected.actions';

export function* signOutWorker(): Generator<
  | void
  | CallEffect<void>
  | CallEffect<boolean>
  | PutEffect<{
      payload: undefined;
      type: string;
    }>,
  void,
  unknown
> {
  try {
    yield call(authService.unsetAccessToken);
    yield call(Router.replace, NOT_AUTH_REDIRECT);
    yield put(appActions.restoreInitialAppState());
  } catch {
    yield logger('Sign out failed.');
  }
}

export function* signOutWatcher(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(authActions.signOut.type, signOutWorker);
}
