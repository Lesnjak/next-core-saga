// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';

import { LandingFooter } from './LandingFooter';
import { LandingHeader } from './LandingHeader';
import styles from './styles.module.scss';

export const LandingLayout: FC = (props) => {
  const { children } = props;

  return (
    <div className={styles.landingLayout}>
      <LandingHeader />

      <main className={styles.landingLayout__body}>{children}</main>

      <LandingFooter />
    </div>
  );
};
