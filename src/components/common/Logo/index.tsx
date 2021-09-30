// ! Delete this comment or delete component if its doesn't use
import { useRouter } from 'next/router';
import { ChangeEvent, FC } from 'react';

import { RoutePathsEnum } from '../../../configs/routes.config';
import { Typography } from '../Typography';
import styles from './styles.module.scss';

export const Logo: FC = () => {
  const router = useRouter();

  const handleClick = (e: ChangeEvent<any>) => {
    e.preventDefault();

    if (router.pathname === RoutePathsEnum.HOME) {
      return;
    }

    router.push(RoutePathsEnum.HOME);
  };

  return (
    <div className={styles.logo} onClick={handleClick}>
      <Typography variant="h2" align="center">
        Next.js starter
      </Typography>
    </div>
  );
};
