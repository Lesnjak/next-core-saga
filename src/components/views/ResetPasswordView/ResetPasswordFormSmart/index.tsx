// ! Delete this comment or delete component if its doesn't use
import { FC, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RoutePathsEnum } from '../../../../configs/routes.config';
import * as notificationsService from '../../../../services/notifications.service';
import { requestPendingSelector } from '../../../../store/branches/requests-pending/requests-pending.selectors';
import { authActions } from '../../../../store/collected.actions';
import { IResetPasswordFormValues } from '../../../../typings/forms-values.interfaces';
import { FormStatusBlock } from '../../../common/form/FormStatusBlock';
import { ResetPasswordForm } from '../ResetPasswordForm';

export const ResetPasswordFormSmart: FC = () => {
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const dispatch = useDispatch();
  const isFetching = useSelector(
    requestPendingSelector(authActions.resetPasswordReq.type)
  );

  const submitHandler = (values: IResetPasswordFormValues) => {
    setError('');

    dispatch(
      authActions.resetPasswordReq({
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
          text="Email sended successfully"
          backLink={RoutePathsEnum.AUTH_SIGN_IN}
        />
      ) : (
        <ResetPasswordForm
          submitFetching={isFetching}
          onSubmit={submitHandler}
          error={error}
        />
      )}
    </Fragment>
  );
};
