import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';

import { AnyAction } from '@reduxjs/toolkit';

import { ISagaStore } from '../';

const getActionObject = (action: any) => {
  return isFunction(action) ? action() : action;
};

export const executeInitialActions = async (
  store: ISagaStore,
  actions: AnyAction[] = []
): Promise<void> => {
  const [firstStageActions, holdActions] = actions.reduce(
    (arrays: any, action: AnyAction) => {
      if (isObject(action)) {
        if (action.postpone) {
          arrays[1].push(getActionObject(action.action));
        } else {
          arrays[0].push(action);
        }
      } else {
        arrays[0].push(getActionObject(action));
      }

      return arrays;
    },
    [[], []]
  );

  await Promise.all(
    firstStageActions.map((action: any) => {
      let originalAction = action;

      if (isFunction(action)) {
        originalAction = action();
      }

      return store.dispatch({
        ...originalAction,
      });
    })
  );

  if (holdActions.length) {
    const actions = [
      ...holdActions.slice(0, 1),
      ...holdActions.slice(1).map((action: any) => ({
        action,
        postpone: true,
      })),
    ];

    await executeInitialActions(store, actions);
  }
};
