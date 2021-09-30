// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';

import { NewPasswordFormSmart } from './NewPasswordFormSmart';

type Props = {
  token: string;
};

export const NewPasswordView: FC<Props> = (props) => {
  const { token } = props;

  return <NewPasswordFormSmart token={token} />;
};
