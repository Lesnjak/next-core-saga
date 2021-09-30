import { fork, ForkEffect } from 'redux-saga/effects';

import { accountBranchSaga } from './branches/account/sagas';
import { appBranchSaga } from './branches/app/sagas';
import { authBranchSaga } from './branches/auth/sagas';
import { exampleBranchSaga } from './branches/example/sagas';

export function* rootSaga(): Generator<ForkEffect<void>, void, unknown> {
  yield fork(accountBranchSaga);
  yield fork(exampleBranchSaga);
  yield fork(authBranchSaga);
  yield fork(appBranchSaga);
}
