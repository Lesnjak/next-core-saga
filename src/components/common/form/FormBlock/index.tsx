// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  marginBottom?:
    | 's1'
    | 's2'
    | 's3'
    | 's4'
    | 's5'
    | 's6'
    | 's7'
    | 's8'
    | 's9'
    | 's10';
  className?: string;
  alignH?: 'center';
};

export const FormBlock: FC<Props> = (props) => {
  const { marginBottom, className, children, alignH } = props;

  const formBlockClass = cn(
    styles.formBlock,
    {
      [styles[`formBlock_mb_${marginBottom}`]]: marginBottom,
      [styles[`formBlock_align_${alignH}`]]: alignH,
    },
    className
  );

  return <div className={formBlockClass}>{children}</div>;
};
