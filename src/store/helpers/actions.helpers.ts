import {
  ActionCreatorWithPreparedPayload,
  AnyAction,
  createAction,
} from '@reduxjs/toolkit';

import { Error } from '../../typings/error.type';

/**
 * Custom function to create dynamically request action with/without status success/error action type
 */
export const createReqActionName = (
  origin: string,
  sub?: 'success' | 'error'
): string => {
  switch (true) {
    case sub && sub === 'success':
      return `${origin}Req$success`;

    case sub && sub === 'error':
      return `${origin}Req$error`;

    default:
      return `${origin}Req`;
  }
};

export const createReqErrorAction = (
  name: string
): ActionCreatorWithPreparedPayload<
  [error: Error],
  {
    error: Error;
  },
  string,
  never,
  never
> =>
  createAction(name, (error: Error) => {
    return {
      payload: {
        error,
      },
    };
  });

export const isPendingReqAction = (action: AnyAction): boolean => {
  return action.type.endsWith('Req');
};

export const isSuccessReqAction = (action: AnyAction): boolean => {
  return action.type.endsWith('Req$success');
};

export const isErrorReqAction = (action: AnyAction): boolean => {
  return action.type.endsWith('Req$error');
};

export const getOriginReqActionName = (type: string): string =>
  type.slice(0, type.lastIndexOf('Req'));
