// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import RouterLink from 'next/link';
import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  underline?: boolean;
  className?: string;
  to: string;
  id: string;
};

export const Link: FC<Props> = (props) => {
  const { underline, className, children, to, id } = props;

  const linkClass = cn(
    styles.customLink,
    {
      [styles.customLink_underline]: underline,
    },
    className
  );

  return (
    <RouterLink href={to}>
      <a className={linkClass} id={id}>
        {children}
      </a>
    </RouterLink>
  );
};
