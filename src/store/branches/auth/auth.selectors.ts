import { RootState } from '../../root.state';
import { IAuthBranchState } from './auth.types';

export const authStateSelector = (state: RootState): IAuthBranchState =>
  state.auth;

export const authTokenSelector = (
  state: RootState
): IAuthBranchState['token'] => state.auth.token;
