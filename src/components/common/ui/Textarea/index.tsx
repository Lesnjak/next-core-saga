// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { ChangeEvent, FC, FocusEvent } from 'react';

import { Typography } from '../../Typography';
import { UiSize } from '../../UiSize';
import styles from './styles.module.scss';

type Props = {
  disableBorder?: boolean;
  placeholder?: string;
  lengthSide?: 'left' | 'right';
  className?: string;
  readOnly?: boolean;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  length?: number;
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  error?: boolean;
  type?: 'password' | 'text';
  value: string;
  name: string;
  id: string;

  onChange: (e: ChangeEvent<any>) => void;
  onFocus?: (e: FocusEvent<any>) => void;
  onBlur?: (e: FocusEvent<any>) => void;
};

export const Textarea: FC<Props> = (props) => {
  const {
    disableBorder,
    placeholder,
    lengthSide = 'right',
    className,
    onChange,
    readOnly,
    onFocus,
    onBlur,
    height = 'full',
    length,
    error,
    width = 'full',
    value,
    name,
    id,
    ...rest
  } = props;

  const textareaClass = cn(
    styles.textarea,
    {
      [styles.textarea_disableBorder]: disableBorder,
      [styles.textarea_error]: error,
    },
    className
  );

  const lengthClass = cn(styles.textarea__lengthBlock, {
    [styles[`textarea__lengthBlock_side_${lengthSide}`]]: lengthSide,
  });

  return (
    <UiSize width={width} height={height}>
      <div className={textareaClass}>
        <textarea
          placeholder={placeholder}
          onChange={onChange}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          name={name}
          id={id}
          {...rest}
        />

        {length && !error && (
          <div className={lengthClass}>
            <Typography variant="body4" color="textLight">
              {value ? value.length : 0} / {length}
            </Typography>
          </div>
        )}
      </div>
    </UiSize>
  );
};
