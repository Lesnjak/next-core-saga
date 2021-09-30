import omit from 'lodash/omit';

import { createReducer } from '@reduxjs/toolkit';

import { requestsErrorsActions } from '../../collected.actions';
import {
  getOriginReqActionName,
  isErrorReqAction,
  isPendingReqAction,
  isSuccessReqAction,
} from '../../helpers/actions.helpers';
import { appExtraActions } from '../app/app.actions';
import { IRequestsErrorsBranchState } from './requests-errors.types';

export const initialState: IRequestsErrorsBranchState = {};

export const requestsErrorsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(appExtraActions.restoreInitialAppState, () => initialState)
    .addCase(requestsErrorsActions.restore, () => initialState)
    .addMatcher(isPendingReqAction, (state, action) => {
      state = omit(state, [action.type]);
    })
    .addMatcher(isSuccessReqAction, (state, action) => {
      state = omit(state, [getOriginReqActionName(action.type)]);
    })
    .addMatcher(isErrorReqAction, (state, action) => {
      state[getOriginReqActionName(action.type)] = action.payload.error;
    });
});
