import { AxiosResponse } from 'axios';
import { call, ForkEffect, put, takeEvery } from 'redux-saga/effects';

import * as apiService from '../../../../services/api';
import { accountActions } from '../../../collected.actions';

export const errorMessage = 'Could not get account info. Please, try again.';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* getAccountWorker(
  action: ReturnType<typeof accountActions.getAccountReq>
) {
  try {
    const { token } = action.payload;
    const response: AxiosResponse<any> = yield call(
      apiService.accountApi.getAccount,
      token
    );

    yield put(accountActions.getAccountReq$success(response.data));
  } catch {
    yield put(accountActions.getAccountReq$error(errorMessage));
  }
}

export function* getAccountWatcher(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(accountActions.getAccountReq.type, getAccountWorker);
}
