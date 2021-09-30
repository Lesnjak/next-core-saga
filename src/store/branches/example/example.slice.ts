import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { INFINITE_LIST_MOCK } from '../../../mocks';
import { appExtraActions } from '../app/app.actions';
import { IExampleBranchState } from './example.types';

export const initialState: IExampleBranchState = {
  forecastState: {
    forecast: null,
  },
  infiniteState: {
    infiniteList: [],
  },
  countState: {
    count: 0,
  },
  paginationState: {
    page: 0,
  },
};

const exampleSlice = createSlice({
  name: `@ll/example`,
  initialState,
  reducers: {
    getForecastExampleReq$success: {
      prepare: (data: any) => ({
        payload: {
          data,
        },
      }),
      reducer: (state, action: PayloadAction<{ data: any }>) => {
        state.forecastState.forecast = action.payload.data;
      },
    },

    changePageExample: {
      prepare: (page: number) => ({
        payload: {
          page,
        },
      }),
      reducer: (state, action: PayloadAction<{ page: number }>) => {
        state.paginationState.page = action.payload.page;
      },
    },

    increaseCountExample: (state) => {
      state.countState.count++;
    },

    decreaseCountExample: (state) => {
      state.countState.count--;
    },

    // TODO: Split load and load more logic in store
    infiniteScrollExampleReq$success: (state) => {
      state.infiniteState.infiniteList = [
        ...state.infiniteState.infiniteList,
        ...INFINITE_LIST_MOCK,
      ];
    },

    restoreBranch: () => initialState,
  },

  extraReducers: (builder) => {
    builder.addCase(appExtraActions.restoreInitialAppState, () => initialState);
  },
});

const { actions, reducer } = exampleSlice;

export const exampleSliceActions = actions;
export default reducer;
