// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';

import { Typography } from '../../../common/Typography';
import styles from './styles.module.scss';

export const LandingFooter: FC = () => {
  return (
    <header className={styles.landingFooter}>
      <Typography variant="subtitle1" align="center">
        Footer
      </Typography>
    </header>
  );
};
