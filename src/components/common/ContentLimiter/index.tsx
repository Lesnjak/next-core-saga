// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
  fluid?: boolean;
};

export const ContentLimiter: FC<Props> = (props) => {
  const { className, children, fluid } = props;

  const contentLimiterClass = cn(
    styles.contentLimiter,
    {
      [styles.contentLimiter_fluid]: fluid,
    },
    className
  );

  return <div className={contentLimiterClass}>{children}</div>;
};
