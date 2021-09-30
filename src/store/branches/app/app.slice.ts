import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { appExtraActions } from './app.actions';
import { IAppBranchState, Palette } from './app.types';

export const initialState: IAppBranchState = {
  palette: null,
};

const appSlice = createSlice({
  name: '@ll/app',
  initialState,
  reducers: {
    setPalette: {
      prepare: (palette: Palette) => ({
        payload: {
          palette,
        },
      }),
      reducer: (state, action: PayloadAction<{ palette: Palette }>) => {
        state.palette = action.payload.palette;
      },
    },

    restoreBranch: () => initialState,
  },

  extraReducers: (builder) => {
    builder.addCase(appExtraActions.restoreInitialAppState, () => initialState);
  },
});

const { actions, reducer } = appSlice;

export const appSliceActions = actions;
export default reducer;
