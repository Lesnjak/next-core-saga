import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { appExtraActions } from '../app/app.actions';
import { IAuthBranchState } from './auth.types';

export const initialState: IAuthBranchState = {
  token: null,
};

const authSlice = createSlice({
  name: `@ll/auth`,
  initialState,
  reducers: {
    signInReq$success: {
      prepare: (token: string) => ({
        payload: {
          token,
        },
      }),
      reducer: (state, action: PayloadAction<{ token: string }>) => {
        state.token = action.payload.token;
      },
    },

    restoreBranch: () => initialState,
  },

  extraReducers: (builder) => {
    builder.addCase(appExtraActions.restoreInitialAppState, () => initialState);
  },
});

const { actions, reducer } = authSlice;

export const authSliceActions = actions;
export default reducer;
