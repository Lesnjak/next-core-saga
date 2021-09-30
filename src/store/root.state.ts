import { StoreEntitiesEnum } from '../configs/store.config';
import { IAccountBranchState } from './branches/account/account.types';
import { IAppBranchState } from './branches/app/app.types';
import { IAuthBranchState } from './branches/auth/auth.types';
import { IExampleBranchState } from './branches/example/example.types';
import { IModalBranchState } from './branches/modal/modal.types';
import { IRequestsErrorsBranchState } from './branches/requests-errors/requests-errors.types';
import { IRequestsPendingBranchState } from './branches/requests-pending/requests-pending.types';
import { IUiBranchState } from './branches/ui/ui.types';

export type RootState = {
  [StoreEntitiesEnum.REQUESTS_ERRORS]: IRequestsErrorsBranchState;
  [StoreEntitiesEnum.REQUESTS_PENDING]: IRequestsPendingBranchState;
  [StoreEntitiesEnum.ACCOUNT]: IAccountBranchState;
  [StoreEntitiesEnum.EXAMPLE]: IExampleBranchState;
  [StoreEntitiesEnum.MODAL]: IModalBranchState;
  [StoreEntitiesEnum.AUTH]: IAuthBranchState;
  [StoreEntitiesEnum.APP]: IAppBranchState;
  [StoreEntitiesEnum.UI]: IUiBranchState;
};
