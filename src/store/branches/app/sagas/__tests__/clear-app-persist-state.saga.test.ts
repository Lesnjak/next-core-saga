import { purgeStoredState } from 'redux-persist';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import { persistConfig } from '../../../../../configs/store.config';
import * as saga from '../clear-app-persist-state.saga';

describe('<app> saga', () => {
  describe('clear-app-persist-state', () => {
    it('call', () => {
      return expectSaga(saga.clearAppPersistStateWorker)
        .provide([[matchers.call.fn(purgeStoredState), undefined]])
        .call(purgeStoredState, persistConfig)
        .run();
    });
  });
});
