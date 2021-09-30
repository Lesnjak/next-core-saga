import { RootState } from '../../root.state';
import { IRequestsErrorsBranchState } from './requests-errors.types';

export const requestsErrorsStateSelector = (
  state: RootState
): IRequestsErrorsBranchState => state.requestsErrors;

export const requestErrorSelector =
  (type: string) =>
  (state: RootState): IRequestsErrorsBranchState[string] =>
    state.requestsErrors[type] || null;
