import { createAction } from '@reduxjs/toolkit';

import { IGetAccountReqDto } from '../../../typings/backend/rest-req-dto';
import { createReqErrorAction } from '../../helpers/actions.helpers';

const a = (actionPiece: string) => `@ll/account/${actionPiece}`;

export const accountExtraActions = {
  getAccountReq$error: createReqErrorAction(a('getAccountReq$error')),
  getAccountReq: createAction<IGetAccountReqDto>(a('getAccountReq')),
};
