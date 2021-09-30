import omit from 'lodash/omit';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { appExtraActions } from '../app/app.actions';
import {
  IModalBranchState,
  IModalFlowData,
  ModalFlowEnum,
  ModalNameType,
} from './modal.types';

export const initialState: IModalBranchState = {
  modalActiveState: false,
  simpleModalState: {
    modalName: null,
    modalData: null,
  },
  modalFlowsState: {},
};

const modalSlice = createSlice({
  name: `@ll/modal`,
  initialState,
  reducers: {
    openModalFlow: {
      prepare: (modalId: string, modalData: IModalFlowData) => ({
        payload: { modalId, modalData },
      }),
      reducer: (
        state,
        action: PayloadAction<{ modalId: string; modalData: IModalFlowData }>
      ) => {
        state.modalFlowsState = {
          ...state.modalFlowsState,
          [action.payload.modalId]: action.payload.modalData,
        };
        state.modalActiveState = true;
      },
    },

    changeFlowModalType: {
      prepare: (modalId: string, type: ModalFlowEnum, data?: unknown) => ({
        payload: { modalId, type, data },
      }),
      reducer: (
        state,
        action: PayloadAction<{
          modalId: string;
          type: ModalFlowEnum;
          data?: unknown;
        }>
      ) => {
        let modalData;

        if (!state.modalFlowsState[action.payload.modalId]) {
          state.modalActiveState = true;
        }

        if (action.payload.data) {
          modalData = action.payload.data;
        } else {
          modalData = state.modalFlowsState[action.payload.modalId].modalData;
        }

        state.modalFlowsState = {
          ...state.modalFlowsState,
          [action.payload.modalId]: {
            ...state.modalFlowsState[action.payload.modalId],
            modalType: action.payload.type,
            modalData,
          },
        };
      },
    },

    closeModalFlow: {
      prepare: (modalId: string) => ({
        payload: { modalId },
      }),
      reducer: (state, action: PayloadAction<{ modalId: string }>) => {
        if (state.modalFlowsState[action.payload.modalId]) {
          state.modalFlowsState = {
            ...state.modalFlowsState,
            [action.payload.modalId]: {
              ...state.modalFlowsState[action.payload.modalId],
              modalType: ModalFlowEnum.CLOSED,
            },
          };
          state.modalActiveState = false;
        }
      },
    },

    clearCloseModalFlow: {
      prepare: (modalId: string) => ({
        payload: { modalId },
      }),
      reducer: (state, action: PayloadAction<{ modalId: string }>) => {
        state.modalFlowsState = omit(
          state.modalFlowsState,
          action.payload.modalId
        );
        state.modalActiveState = false;
      },
    },

    openSimpleModal: {
      prepare: (name: ModalNameType, data?: Record<string, any>) => ({
        payload: { name, data },
      }),
      reducer: (
        state,
        action: PayloadAction<{
          name: ModalNameType;
          data?: Record<string, any>;
        }>
      ) => {
        state.simpleModalState = {
          modalName: action.payload.name,
          modalData: action.payload.data || state.simpleModalState.modalData,
        };
        state.modalActiveState = true;
      },
    },

    closeSimpleModal: (state) => {
      state.simpleModalState = initialState.simpleModalState;
      state.modalActiveState = false;
    },

    restoreBranch: () => initialState,
  },

  extraReducers: (builder) => {
    builder.addCase(appExtraActions.restoreInitialAppState, () => initialState);
  },
});

const { actions, reducer } = modalSlice;

export const modalSliceActions = actions;
export default reducer;
