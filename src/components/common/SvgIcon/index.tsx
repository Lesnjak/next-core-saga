// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  pointer?: boolean;
  rotate?: '90' | '180' | '270' | '360';
  color?: 'primaryDark' | 'secondary' | 'primary' | 'third' | 'valid' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  src: string;
  top?: '1' | '2' | '3' | '4';
  id?: string;

  onClick?: () => void;
};

export const SvgIcon: FC<Props> = (props) => {
  const { className, pointer, onClick, rotate, color, size, src, top, id } =
    props;

  const svgIconClass = cn(
    styles.svgIcon,
    {
      [styles[`svgIcon_rotate_${rotate}`]]: rotate,
      [styles[`svgIcon_color_${color}`]]: color,
      [styles[`svgIcon_size_${size}`]]: size,
      [styles[`svgIcon_top_${top}`]]: top,
      [styles['svgIcon_pointer']]: pointer,
    },
    className
  );

  return (
    <ReactSVG src={src} className={svgIconClass} onClick={onClick} id={id} />
  );
};
