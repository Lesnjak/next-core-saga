import { RootState } from '../../root.state';
import { IRequestsPendingBranchState } from './requests-pending.types';

export const requestsPendingStateSelector = (
  state: RootState
): IRequestsPendingBranchState => state.requestsPending;

export const requestPendingSelector =
  (type: string) =>
  (state: RootState): IRequestsPendingBranchState[string] =>
    state.requestsPending[type] || false;
