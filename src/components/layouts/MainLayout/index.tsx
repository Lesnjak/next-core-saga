// ! Delete this comment or delete component if its doesn't use
import { FC, ReactNode } from 'react';

import { MainHeader } from './MainHeader';
import { MainSidebar } from './MainSidebar';
import styles from './styles.module.scss';

export const MainLayout: FC = (props) => {
  const { children } = props;

  return (
    <div className={styles.mainLayout}>
      <MainHeader />

      <MainSidebar />

      <main>{children}</main>
    </div>
  );
};

export const getLayout = (page: ReactNode): JSX.Element => (
  <MainLayout>{page}</MainLayout>
);
