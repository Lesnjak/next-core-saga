// ! Delete this comment or delete component if its doesn't use
import { FC, Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RoutePathsEnum } from '../../../../configs/routes.config';
import { requestPendingSelector } from '../../../../store/branches/requests-pending/requests-pending.selectors';
import { authActions } from '../../../../store/collected.actions';
import { FormStatusBlock } from '../../../common/form/FormStatusBlock';
import { Loader } from '../../../common/Loader';
import { Typography } from '../../../common/Typography';

type Props = {
  token: string;
};

export const VerifyEmailSmart: FC<Props> = (props) => {
  const { token } = props;

  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const dispatch = useDispatch();
  const isFetching = useSelector(
    requestPendingSelector(authActions.verifyEmailReq.type)
  );

  useEffect(() => {
    dispatch(
      authActions.verifyEmailReq({
        onSuccess: () => setSuccess(true),
        onError: (res) => {
          setError(res.message);
        },
        data: { token },
      })
    );
  }, [dispatch, token]);

  return (
    <div>
      {isFetching ? (
        <Fragment>
          <Typography variant="body1">Email verifying...</Typography>

          <Loader />
        </Fragment>
      ) : isSuccess ? (
        <FormStatusBlock
          backLink={RoutePathsEnum.AUTH_SIGN_IN}
          text="Email verified successfully"
        />
      ) : (
        <FormStatusBlock
          backLink={RoutePathsEnum.AUTH_SIGN_IN}
          status={false}
          text={error}
        />
      )}
    </div>
  );
};
