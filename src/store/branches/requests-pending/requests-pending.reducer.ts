import omit from 'lodash/omit';

import { createReducer } from '@reduxjs/toolkit';

import { requestsPendingActions } from '../../collected.actions';
import {
  getOriginReqActionName,
  isErrorReqAction,
  isPendingReqAction,
  isSuccessReqAction,
} from '../../helpers/actions.helpers';
import { appExtraActions } from '../app/app.actions';
import { IRequestsPendingBranchState } from './requests-pending.types';

export const initialState: IRequestsPendingBranchState = {};

export const requestsPendingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(appExtraActions.restoreInitialAppState, () => initialState)
    .addCase(requestsPendingActions.restore, () => initialState)
    .addMatcher(isPendingReqAction, (state, action) => {
      state[action.type] = true;
    })
    .addMatcher(isSuccessReqAction, (state, action) => {
      state = omit(state, [getOriginReqActionName(action.type)]);
    })
    .addMatcher(isErrorReqAction, (state, action) => {
      state = omit(state, [getOriginReqActionName(action.type)]);
    });
});
