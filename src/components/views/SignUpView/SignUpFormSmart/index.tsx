// ! Delete this comment or delete component if its doesn't use
import { FC, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RoutePathsEnum } from '../../../../configs/routes.config';
import * as notificationsService from '../../../../services/notifications.service';
import { requestPendingSelector } from '../../../../store/branches/requests-pending/requests-pending.selectors';
import { authActions } from '../../../../store/collected.actions';
import { ISignUpFormValues } from '../../../../typings/forms-values.interfaces';
import { FormStatusBlock } from '../../../common/form/FormStatusBlock';
import { SignUpForm } from '../SignUpForm';

export const SignUpFormSmart: FC = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(
    requestPendingSelector(authActions.signUpReq.type)
  );

  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const submitHandler = (values: ISignUpFormValues) => {
    setError('');

    dispatch(
      authActions.signUpReq({
        onSuccess: () => setSuccess(true),
        onError: (res) => {
          notificationsService.errorMsg(res.message);
          setError(res.message);
        },
        data: { values },
      })
    );
  };

  return (
    <Fragment>
      {isSuccess ? (
        <FormStatusBlock
          text="Registration was successfully"
          backLink={RoutePathsEnum.AUTH_SIGN_IN}
        />
      ) : (
        <SignUpForm
          submitFetching={isFetching}
          onSubmit={submitHandler}
          error={error}
        />
      )}
    </Fragment>
  );
};
