// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as notificationsService from '../../../../services/notifications.service';
import { requestPendingSelector } from '../../../../store/branches/requests-pending/requests-pending.selectors';
import { authActions } from '../../../../store/collected.actions';
import { ISignInFormValues } from '../../../../typings/forms-values.interfaces';
import { SignInForm } from '../SignInForm';

export const SignInFormSmart: FC = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(
    requestPendingSelector(authActions.signInReq.type)
  );

  const submitHandler = (values: ISignInFormValues) => {
    dispatch(
      authActions.signInReq({
        onError: (res) => {
          notificationsService.errorMsg(res.message);
        },
        data: { values },
      })
    );
  };

  return <SignInForm submitFetching={isFetching} onSubmit={submitHandler} />;
};
