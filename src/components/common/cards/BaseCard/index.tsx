// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC } from 'react';

import { Typography } from '../../Typography';
import styles from './styles.module.scss';

type Props = {
  className?: string;
  text: string;
};

export const BaseCard: FC<Props> = (props) => {
  const { className, text } = props;

  return (
    <div className={cn(styles.baseCard, className)}>
      <Typography variant="body2" component="p">
        {text}
      </Typography>
    </div>
  );
};
