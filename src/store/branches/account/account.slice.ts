import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAccount } from '../../../typings/backend/entities';
import { appExtraActions } from '../app/app.actions';
import { IAccountBranchState } from './account.types';

export const initialState: IAccountBranchState = {
  account: {
    firstName: '',
    lastName: '',
    email: '',
  },
};

const accountSlice = createSlice({
  name: `@ll/account`,
  initialState,
  reducers: {
    getAccountReq$success: {
      prepare: (data: IAccount) => ({
        payload: {
          data,
        },
      }),
      reducer: (state, action: PayloadAction<{ data: IAccount }>) => {
        state.account = action.payload.data;
      },
    },

    getAccountWS$update: {
      prepare: (data: IAccount) => ({
        payload: {
          data,
        },
      }),
      reducer: (state, action: PayloadAction<{ data: IAccount }>) => {
        state.account = action.payload.data;
      },
    },

    restoreBranch: () => initialState,
  },

  extraReducers: (builder) => {
    builder.addCase(appExtraActions.restoreInitialAppState, () => initialState);
  },
});

const { actions, reducer } = accountSlice;

export const accountSliceActions = actions;
export default reducer;
