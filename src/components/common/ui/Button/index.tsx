// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import noop from 'lodash/noop';
import { CSSProperties, FC, ReactChild, ReactNode } from 'react';

import { Action } from '@reduxjs/toolkit';

import { Loader } from '../../Loader';
import { Typography } from '../../Typography';
import { UiSize } from '../../UiSize';
import styles from './styles.module.scss';

type Props = {
  fontWeight?: 'default' | 'bold';
  uppercase?: boolean;
  className?: string;
  disabled?: boolean;
  children: ReactChild | ReactNode;
  variant?: 'contained' | 'outlined';
  loading?: boolean;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  color?: 'secondary';
  style?: CSSProperties;
  type?: 'button' | 'submit';
  id: string;

  onClick?: () => void | Action<any> | undefined;
};

export const Button: FC<Props> = (props) => {
  const {
    fontWeight = 'bold',
    uppercase,
    className,
    disabled,
    children,
    onClick,
    variant = 'contained',
    loading,
    height,
    width,
    style,
    color = 'secondary',
    type = 'button',
    id,
  } = props;

  const buttonClass = cn(
    styles.button,
    {
      [styles[`button_fontWeight_${fontWeight}`]]: fontWeight,
      [styles[`button_variant_${variant}`]]: variant,
      [styles[`button_padding_${height}`]]: height && width === 'content',
      [styles[`button_color_${color}`]]: color,
      [styles.button_disabled]: disabled,
      [styles.button_loading]: loading,
    },
    className
  );

  return (
    <UiSize width={width} height={height}>
      <button
        className={buttonClass}
        disabled={disabled}
        onClick={loading || disabled ? noop : onClick}
        style={style}
        type={type}
        id={id}
      >
        {loading ? (
          <Loader color="onSecondary" />
        ) : (
          <div className={styles.button__content}>
            <Typography uppercase={uppercase} variant="inherit" color="inherit">
              {children}
            </Typography>
          </div>
        )}
      </button>
    </UiSize>
  );
};
