import { combineReducers } from '@reduxjs/toolkit';

import { StoreEntitiesEnum } from '../configs/store.config';
import accountReducer from './branches/account/account.slice';
import appReducer from './branches/app/app.slice';
import authReducer from './branches/auth/auth.slice';
import exampleReducer from './branches/example/example.slice';
import modalReducer from './branches/modal/modal.slice';
import { requestsErrorsReducer } from './branches/requests-errors/requests-errors.reducer';
import { requestsPendingReducer } from './branches/requests-pending/requests-pending.reducer';
import uiReducer from './branches/ui/ui.slice';

export const combinedReducer = combineReducers({
  [StoreEntitiesEnum.REQUESTS_ERRORS]: requestsErrorsReducer,
  [StoreEntitiesEnum.REQUESTS_PENDING]: requestsPendingReducer,
  [StoreEntitiesEnum.ACCOUNT]: accountReducer,
  [StoreEntitiesEnum.EXAMPLE]: exampleReducer,
  [StoreEntitiesEnum.MODAL]: modalReducer,
  [StoreEntitiesEnum.AUTH]: authReducer,
  [StoreEntitiesEnum.APP]: appReducer,
  [StoreEntitiesEnum.UI]: uiReducer,
});
