// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

export type Props = {
  className?: string;
  color?: 'primary' | 'secondary' | 'onSecondary';
  style?: Record<string, any>;
  size?: 'sm' | 'md' | 'lg';
};

export const Loader: FC<Props> = (props) => {
  const { className, color = 'secondary', style, size = 'md' } = props;

  const loaderClass = cn(
    styles.loader,
    {
      [styles[`loader_color_${color}`]]: color,
      [styles[`loader_size_${size}`]]: size,
    },
    className
  );

  return <div className={loaderClass} style={style} />;
};
