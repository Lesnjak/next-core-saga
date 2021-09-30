import { AxiosResponse } from 'axios';
import { call, ForkEffect, put, takeEvery } from 'redux-saga/effects';

import * as apiService from '../../../../services/api';
import { exampleActions, modalActions } from '../../../collected.actions';
import { ModalFlowEnum } from '../../modal/modal.types';

export const OPEN_WEATHER_API_KEY = 'c54ed91ee62ba8bc1a4e4984a2f92188';
export const errorMessage =
  'Could not load example forecast. Please, try again.';

export function* getForecastWorker(
  action: ReturnType<typeof exampleActions.getForecastExampleReq>
) {
  const { lat, lon, asModalFlow, modalFlowId } = action.payload;
  const appid = OPEN_WEATHER_API_KEY;

  try {
    const response: AxiosResponse<any> = yield call(
      apiService.exampleApi.getForecast,
      appid,
      lat,
      lon
    );

    yield put(exampleActions.getForecastExampleReq$success(response.data));

    if (asModalFlow && modalFlowId) {
      yield put(
        modalActions.changeFlowModalType(modalFlowId, ModalFlowEnum.SUCCESS)
      );
    }
  } catch {
    yield put(exampleActions.getForecastExampleReq$error(errorMessage));

    if (asModalFlow && modalFlowId) {
      yield put(
        modalActions.changeFlowModalType(modalFlowId, ModalFlowEnum.FAILURE)
      );
    }
  }
}

export function* getForecastWatcher(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(exampleActions.getForecastExampleReq.type, getForecastWorker);
}
