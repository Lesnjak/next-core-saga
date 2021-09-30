import { RootState } from '../../root.state';
import { IAccountBranchState } from './account.types';

export const accountStateSelector = (state: RootState): IAccountBranchState =>
  state.account;

export const accountSelector = (
  state: RootState
): IAccountBranchState['account'] => state.account.account;
