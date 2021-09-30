// ! Delete this comment or delete component if its doesn't use
import { FC, ReactNode } from 'react';

import { mapAuthPageType } from '../../../utils/mappers/map-auth-page-type.ts';
import { AuthHeader } from './AuthHeader';
import styles from './styles.module.scss';

export const AuthLayout: FC = (props) => {
  const { children } = props;

  const page = mapAuthPageType();

  return (
    <div className={styles.authLayout}>
      <AuthHeader page={page} />

      <main>{children}</main>
    </div>
  );
};

export const getLayout = (page: ReactNode): JSX.Element => (
  <AuthLayout>{page}</AuthLayout>
);
