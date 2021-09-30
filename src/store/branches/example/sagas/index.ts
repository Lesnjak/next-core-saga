import { fork, ForkEffect } from 'redux-saga/effects';

import { getForecastWatcher } from './get-forecast-example.saga';
import { getInfiniteListWatcher } from './get-infinite-scroll.saga';

export function* exampleBranchSaga(): Generator<
  ForkEffect<void>,
  void,
  unknown
> {
  yield fork(getInfiniteListWatcher);
  yield fork(getForecastWatcher);
}
