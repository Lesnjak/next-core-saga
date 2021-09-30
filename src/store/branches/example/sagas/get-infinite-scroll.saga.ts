import { ForkEffect, put, takeEvery } from 'redux-saga/effects';

import { logger } from '../../../../utils/logger';
import { exampleActions } from '../../../collected.actions';

export function* getInfiniteListWorker(
  action: ReturnType<typeof exampleActions.infiniteScrollExampleReq>
) {
  try {
    yield logger('payload', action.payload);

    yield put(exampleActions.infiniteScrollExampleReq$success());
  } catch {
    yield put(
      exampleActions.infiniteScrollExampleReq$error('Could not load data.')
    );
  }
}

export function* getInfiniteListWatcher(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(
    exampleActions.infiniteScrollExampleReq.type,
    getInfiniteListWorker
  );
}
