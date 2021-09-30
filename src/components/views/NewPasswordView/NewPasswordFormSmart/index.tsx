// ! Delete this comment or delete component if its doesn't use
import { FC, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RoutePathsEnum } from '../../../../configs/routes.config';
import * as notificationsService from '../../../../services/notifications.service';
import { requestPendingSelector } from '../../../../store/branches/requests-pending/requests-pending.selectors';
import { authActions } from '../../../../store/collected.actions';
import { INewPasswordFormValues } from '../../../../typings/forms-values.interfaces';
import { FormStatusBlock } from '../../../common/form/FormStatusBlock';
import { NewPasswordForm } from '../NewPasswordForm';

type Props = {
  token: string;
};

export const NewPasswordFormSmart: FC<Props> = (props) => {
  const { token } = props;

  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const dispatch = useDispatch();
  const isFetching = useSelector(
    requestPendingSelector(authActions.newPasswordReq.type)
  );

  const submitHandler = (values: INewPasswordFormValues) => {
    setError('');

    dispatch(
      authActions.newPasswordReq({
        onSuccess: () => setSuccess(true),
        onError: (res) => {
          notificationsService.errorMsg(res.message);
          setError(res.message);
        },
        data: { values, token },
      })
    );
  };

  return (
    <Fragment>
      {isSuccess ? (
        <FormStatusBlock
          text="Password changed successfully"
          backLink={RoutePathsEnum.AUTH_SIGN_IN}
        />
      ) : (
        <NewPasswordForm
          submitFetching={isFetching}
          onSubmit={submitHandler}
          error={error}
        />
      )}
    </Fragment>
  );
};
