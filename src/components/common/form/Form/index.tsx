// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC, FormEvent } from 'react';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  width?: 'md' | 'full';

  onSubmit: (values: Record<string, any> & FormEvent<HTMLFormElement>) => void;
};

export const Form: FC<Props> = (props) => {
  const { className, children, onSubmit, width = 'md' } = props;

  const formClass = cn(
    styles.form,
    {
      [styles[`form_width_${width}`]]: width,
    },
    className
  );

  return (
    <form className={formClass} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
