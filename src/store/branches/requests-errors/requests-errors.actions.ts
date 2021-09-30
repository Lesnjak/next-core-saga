import { createAction } from '@reduxjs/toolkit';

const a = (actionPiece: string) => `@all/requests-errors/${actionPiece}`;

export const requestsErrorsExtraActions = {
  restore: createAction(a('restore')),
};
