// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';

import { Typography } from '../../../../common/Typography';
import styles from './styles.module.scss';

type Props = {
  title: string;
};

export const ExampleViewCard: FC<Props> = (props) => {
  const { children, title } = props;

  return (
    <div className={styles.exampleViewCard}>
      <div className={styles.exampleViewCard__titleWrapper}>
        <Typography variant="h4">{title}</Typography>
      </div>

      <div className={styles.exampleViewCard__contentWrapper}>{children}</div>
    </div>
  );
};
