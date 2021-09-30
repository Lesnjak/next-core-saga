import { call, delay, ForkEffect, put, takeEvery } from 'redux-saga/effects';

import { logger } from '../../../../utils/logger';
import { authActions } from '../../../collected.actions';

export const errorMessage = 'Could not register. Please, try again.';

export function* signUpWorker(
  action: ReturnType<typeof authActions.signUpReq>
) {
  const {
    data: { values },
    onSuccess,
    onError,
  } = action.payload;

  yield logger('[Registration payload]', values);

  try {
    const response = Math.floor(Math.random() * 2) ? true : false;

    yield delay(3000);

    if (!response) {
      throw new Error();
    }

    yield call(onSuccess);
  } catch {
    yield call(onError, {
      message: errorMessage,
    });
    yield put(authActions.signUpReq$error(errorMessage));
  }
}

export function* signUpWatcher(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(authActions.signUpReq.type, signUpWorker);
}
