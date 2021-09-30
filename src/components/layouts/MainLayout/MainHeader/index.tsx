// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';

import { ContentLimiter } from '../../../common/ContentLimiter';
import { Logo } from '../../../common/Logo';
import { AccountInfoSmart } from './AccountInfoSmart';
import styles from './styles.module.scss';

export const MainHeader: FC = () => {
  return (
    <header className={styles.mainHeader}>
      <ContentLimiter>
        <div className={styles.mainHeader__content}>
          <Logo />

          <div className={styles.mainHeader__rightBlock}>
            <AccountInfoSmart />
          </div>
        </div>
      </ContentLimiter>
    </header>
  );
};
