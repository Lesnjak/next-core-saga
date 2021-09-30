import omit from 'lodash/omit';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { appExtraActions } from '../app/app.actions';
import { IUiBranchState } from './ui.types';

export const initialState: IUiBranchState = {
  active: {},
};

const uiSlice = createSlice({
  name: `@ll/ui`,
  initialState,
  reducers: {
    toggleUi: {
      prepare: (name: string) => ({
        payload: {
          name,
        },
      }),
      reducer: (state, action: PayloadAction<{ name: string }>) => {
        if (action.payload.name in state.active) {
          state.active = omit(state.active, [action.payload.name]);
        } else {
          state.active = { ...state.active, [action.payload.name]: true };
        }
      },
    },

    restoreBranch: () => initialState,
  },

  extraReducers: (builder) => {
    builder.addCase(appExtraActions.restoreInitialAppState, () => initialState);
  },
});

const { actions, reducer } = uiSlice;

export const uiSliceActions = actions;
export default reducer;
