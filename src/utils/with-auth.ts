import { GetServerSidePropsContext } from 'next-redux-wrapper';
import { Store } from 'redux';
import { END, Task } from 'redux-saga';

import { ISagaStore } from '../store';
import { accountActions } from '../store/collected.actions';
import { RootState } from '../store/root.state';
import { getToken } from './get-token';
import { SspRedirect, sspRedirect } from './redirect';

export interface IOptions {
  needAccessToken?: boolean;
  needAccount?: boolean;
}

export type GetSSPContext = GetServerSidePropsContext & {
  store: Store<ISagaStore> & {
    sagaTask?: Task;
  };
};

/**
 * Helper for authentication checking in getServerSideProps method
 */
export const withAuth = async (
  context: GetSSPContext,
  options: IOptions = {}
): Promise<SspRedirect | undefined> => {
  const token = getToken(context);

  const redirect = sspRedirect();

  if (options.needAccessToken && !token) {
    return redirect;
  }

  if (options.needAccount && options.needAccessToken && token) {
    context.store.dispatch(accountActions.getAccountReq({ token }));

    context.store.dispatch(END);

    if (context.store.sagaTask) {
      await context.store.sagaTask.toPromise();
    }

    const state = (context.store as ISagaStore).getState() as RootState;

    if (state.requestsErrors[accountActions.getAccountReq$error.type]) {
      return redirect;
    }
  }

  return;
};
