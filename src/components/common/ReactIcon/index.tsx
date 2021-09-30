// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  pointer?: boolean;
  rotate?: '90' | '180' | '270' | '360';
  color?: 'primaryDark' | 'secondary' | 'primary' | 'third' | 'valid' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  id?: string;

  onClick?: () => void;
};

export const ReactIcon: FC<Props> = (props) => {
  const {
    className,
    children,
    pointer,
    onClick,
    rotate,
    color = 'primary',
    size = 'lg',
    id,
  } = props;

  const reactIconClass = cn(
    styles.reactIcon,
    {
      [styles[`reactIcon_rotate_${rotate}`]]: rotate,
      [styles[`reactIcon_color_${color}`]]: color,
      [styles[`reactIcon_size_${size}`]]: size,
      [styles[`reactIcon_pointer`]]: pointer,
    },
    className
  );

  return (
    <div className={reactIconClass} onClick={onClick} id={id}>
      {children}
    </div>
  );
};
