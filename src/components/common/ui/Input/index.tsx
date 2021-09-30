// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { ChangeEvent, FC, FocusEvent, ReactNode } from 'react';

import { UiSize } from '../../UiSize';
import styles from './styles.module.scss';

export type Props = {
  placeholder?: string;
  rightBlock?: ReactNode;
  className?: string;
  pattern?: RegExp;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
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

export const Input: FC<Props> = (props) => {
  const {
    placeholder,
    rightBlock,
    className,
    onChange,
    pattern,
    onFocus,
    onBlur,
    height = 'md',
    width,
    error,
    value,
    name,
    type = 'text',
    id,
    ...rest
  } = props;

  const handleChange = (e: ChangeEvent<any>) => {
    if (pattern) {
      const value = e.target.value;

      if (!value.match(pattern) && value !== '') {
        e.preventDefault();
      } else {
        onChange(e);
      }
    } else {
      onChange(e);
    }
  };

  const inputClass = cn(
    styles.input,
    {
      [styles[`input_rightBlock_${height}`]]: rightBlock && height,
      [styles.input_error]: error,
    },
    className
  );
  const rightBlockClass = cn({
    [styles.input__rightBlock]: true,
    [styles[`input__rightBlock_${height}`]]: rightBlock && height,
  });

  return (
    <UiSize width={width} height={height}>
      <div className={inputClass}>
        <input
          autoComplete={type === 'password' ? 'new-password' : 'off'}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          name={name}
          type={type}
          id={id}
          {...rest}
        />

        {rightBlock && <div className={rightBlockClass}>{rightBlock}</div>}
      </div>
    </UiSize>
  );
};
