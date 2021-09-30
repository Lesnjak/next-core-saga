// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import Link from 'next/link';
import { CSSProperties, FC, ReactNode } from 'react';

import { Typography } from '../../Typography';
import { UiSize } from '../../UiSize';
import styles from './styles.module.scss';

type Props = {
  fontWeight?: 'default' | 'bold';
  uppercase?: boolean;
  className?: string;
  children: ReactNode | string | number;
  variant?: 'contained' | 'outlined';
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  color?: 'secondary';
  style?: CSSProperties;
  to: string;
  id: string;
};

export const LinkButton: FC<Props> = (props) => {
  const {
    fontWeight = 'bold',
    uppercase,
    className,
    children,
    variant = 'contained',
    height,
    width,
    style,
    color = 'secondary',
    to,
    id,
  } = props;

  const linkButtonClass = cn(
    styles.linkButton,
    {
      [styles[`linkButton_fontWeight_${fontWeight}`]]: fontWeight,
      [styles[`linkButton_variant_${variant}`]]: variant,
      [styles[`linkButton_padding_${height}`]]: height && width === 'content',
      [styles[`linkButton_color_${color}`]]: color,
    },
    className
  );

  return (
    <UiSize width={width} height={height}>
      <Link href={to}>
        <a className={linkButtonClass} style={style} id={id}>
          <Typography uppercase={uppercase} color="inherit" variant="inherit">
            {children}
          </Typography>
        </a>
      </Link>
    </UiSize>
  );
};
