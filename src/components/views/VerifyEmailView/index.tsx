// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';

import { VerifyEmailSmart } from './VerifyEmailSmart';

type Props = {
  token: string;
};

export const VerifyEmailView: FC<Props> = (props) => {
  const { token } = props;

  return <VerifyEmailSmart token={token} />;
};
