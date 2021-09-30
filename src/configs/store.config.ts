import { storage } from '../store/helpers/create-persist-storage.helpers';

/**
 * Enum for typing store state branches
 */
export enum StoreEntitiesEnum {
  REQUESTS_PENDING = 'requestsPending',
  REQUESTS_ERRORS = 'requestsErrors',
  ACCOUNT = 'account',
  EXAMPLE = 'example',
  MODAL = 'modal',
  AUTH = 'auth',
  APP = 'app',
  UI = 'ui',
}

/**
 * Put store entities to set into persist
 */
export const persistWhitelistStores = [StoreEntitiesEnum.MODAL];

/**
 * Persist config for store
 */
export const persistConfig = {
  whitelist: persistWhitelistStores || [], // Make sure it does not clash with server keys
  storage,
  debug: true,
  key: 'nextjs',
};
