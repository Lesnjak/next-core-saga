import { ForkEffect, takeEvery } from 'redux-saga/effects';

import { appActions } from '../../../collected.actions';

export function* checkPaletteWorker(
  action: ReturnType<typeof appActions.setPalette>
): Generator<void, void, unknown> {
  const palette = action.payload.palette;

  yield localStorage.setItem('palette', palette as string);
  yield document
    .getElementsByTagName('HTML')[0]
    .setAttribute('data-palette', palette as string);
}

export function* checkPaletteWatcher(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(appActions.setPalette.type, checkPaletteWorker);
}
