import { accountExtraActions } from './branches/account/account.actions';
import { accountSliceActions } from './branches/account/account.slice';
import { appExtraActions } from './branches/app/app.actions';
import { appSliceActions } from './branches/app/app.slice';
import { authExtraActions } from './branches/auth/auth.actions';
import { authSliceActions } from './branches/auth/auth.slice';
import { exampleExtraActions } from './branches/example/example.actions';
import { exampleSliceActions } from './branches/example/example.slice';
import { modalSliceActions } from './branches/modal/modal.slice';
import { requestsErrorsExtraActions } from './branches/requests-errors/requests-errors.actions';
import { requestsPendingExtraActions } from './branches/requests-pending/requests-pending.actions';
import { uiSliceActions } from './branches/ui/ui.slice';

export const requestsPendingActions = { ...requestsPendingExtraActions };
export const requestsErrorsActions = { ...requestsErrorsExtraActions };
export const accountActions = {
  ...accountSliceActions,
  ...accountExtraActions,
};
export const exampleActions = {
  ...exampleSliceActions,
  ...exampleExtraActions,
};
export const modalActions = { ...modalSliceActions };
export const authActions = { ...authSliceActions, ...authExtraActions };
export const appActions = { ...appSliceActions, ...appExtraActions };
export const uiActions = { ...uiSliceActions };
