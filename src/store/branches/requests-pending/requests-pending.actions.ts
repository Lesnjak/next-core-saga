import { createAction } from '@reduxjs/toolkit';

const a = (actionPiece: string) => `@ll/requests-pending/${actionPiece}`;

export const requestsPendingExtraActions = {
  restore: createAction(a('restore')),
};
