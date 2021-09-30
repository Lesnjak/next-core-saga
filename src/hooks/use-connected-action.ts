import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { AnyAction } from '@reduxjs/toolkit';

/**
 * Get a generic hook-function to use with Action
 * Removes overhead of manually writing out hooks for actions.
 */
export function useConnectedAction<
  TAction extends (...args: any[]) => AnyAction
>(action: TAction): TAction {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(((...args) => dispatch(action(...args))) as TAction, [
    dispatch,
    action,
  ]);
}
