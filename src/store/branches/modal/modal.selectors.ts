import { RootState } from '../../root.state';
import {
  IModalBranchState,
  IModalFlowData,
  ISimpleModalState,
} from './modal.types';

export const modalStateSelector = (state: RootState): IModalBranchState =>
  state.modal;

export const simpleModalStateSelector = (state: RootState): ISimpleModalState =>
  state.modal.simpleModalState;

export const modalFlowStateSelector =
  (id: string) =>
  (state: RootState): IModalFlowData =>
    state.modal.modalFlowsState[id] || null;
