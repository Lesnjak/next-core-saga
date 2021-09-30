import { createAction } from '@reduxjs/toolkit';

import { createReqErrorAction } from '../../helpers/actions.helpers';

const a = (actionPiece: string) => `@ll/example/${actionPiece}`;

export const exampleExtraActions = {
  getForecastExampleReq$error: createReqErrorAction(
    a('getForecastExampleReq$error')
  ),
  getForecastExampleReq: createAction<IGetForecastReqPayload>(
    a('getForecastExampleReq')
  ),

  infiniteScrollExampleReq$error: createReqErrorAction(
    a('infiniteScrollExampleReq$error')
  ),
  infiniteScrollExampleReq: createAction(a('infiniteScrollExampleReq')),
};

export interface IGetForecastReqPayload {
  asModalFlow?: boolean;
  modalFlowId?: string;
  lat: string;
  lon: string;
}
