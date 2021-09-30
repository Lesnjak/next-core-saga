import { fork, ForkEffect } from 'redux-saga/effects';

import { signInWatcher } from './sign-in.saga';
import { signOutWatcher } from './sign-out.saga';
import { signUpWatcher } from './sign-up.saga';

export function* authBranchSaga(): Generator<ForkEffect<void>, void, unknown> {
  yield fork(signOutWatcher);
  yield fork(signUpWatcher);
  yield fork(signInWatcher);
}
