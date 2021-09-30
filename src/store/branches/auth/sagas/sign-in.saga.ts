import { AxiosResponse } from 'axios';
import { call, ForkEffect, put, takeEvery } from 'redux-saga/effects';

import { AUTH_REDIRECT } from '../../../../configs/routes.config';
import * as apiService from '../../../../services/api';
import authService from '../../../../services/auth-client-side.service';
import { ISignInResDto } from '../../../../typings/backend/rest-res-dto';
import { logger } from '../../../../utils/logger';
import { redirect } from '../../../../utils/redirect';
import { authActions } from '../../../collected.actions';

export const errorMessage = 'Could not log in. Please, try again.';

export function* signInWorker(
  action: ReturnType<typeof authActions.signInReq>
) {
  const {
    data: { values },
    onError,
  } = action.payload;

  yield logger('[SignIn payload]', values);

  try {
    const response: AxiosResponse<ISignInResDto> = yield call(
      apiService.authApi.signIn,
      values
    );

    yield authService.setAccessToken(response.data.token);
    yield put(authActions.signInReq$success(response.data.token));
    yield redirect(AUTH_REDIRECT);
  } catch {
    yield call(onError, {
      message: errorMessage,
    });
    yield put(authActions.signInReq$error(errorMessage));
  }
}

export function* signInWatcher(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(authActions.signInReq.type, signInWorker);
}
