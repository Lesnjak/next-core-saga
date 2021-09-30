import { createAction } from '@reduxjs/toolkit';

const a = (actionPiece: string) => `@ll/app/${actionPiece}`;

export const appExtraActions = {
  restoreInitialAppState: createAction(a('restoreInitialAppState')),
  clearAppPersistState: createAction(a('clearAppPersistState')),
  initializeApp: createAction(a('initializeApp')),
};
