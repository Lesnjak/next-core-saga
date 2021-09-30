import { RootState } from '../../root.state';
import { IUiBranchState } from './ui.types';

export const uiStateSelector = (state: RootState): IUiBranchState => state.ui;

export const activeUiSelector = (state: RootState): IUiBranchState['active'] =>
  state.ui.active;
