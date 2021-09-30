// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
};

export const UiSize: FC<Props> = (props) => {
  const { className, children, height = 'md', width = 'full' } = props;

  const uiSizeClass = cn(
    styles.uiSize,
    {
      [styles[`uiSize_height_${height}`]]: height,
      [styles[`uiSize_width_${width}`]]: width,
    },
    className
  );

  return <div className={uiSizeClass}>{children}</div>;
};
