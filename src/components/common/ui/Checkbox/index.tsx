// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { ChangeEvent, FC } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

import styles from './styles.module.scss';

type Props = {
  defaultChecked?: boolean;
  className?: string;
  disabled?: boolean;
  value: boolean;
  size?: string;
  name: string;
  id: string;

  onChange: (e: ChangeEvent<any>) => void;
};

export const Checkbox: FC<Props> = (props) => {
  const {
    defaultChecked,
    className,
    onChange,
    disabled,
    value,
    size,
    name,
    id,
  } = props;

  const checkboxClass = cn(
    styles.checkbox,
    {
      [styles[`checkbox_size_${size}`]]: size,
      [styles.checkbox_disabled]: disabled,
    },
    className
  );

  return (
    <div className={checkboxClass}>
      <input
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        checked={value}
        type="checkbox"
        name={name}
        id={id}
      />

      <label className={styles.checkbox__label} htmlFor={id}>
        <span className={styles.checkbox__icon}>
          <IoMdCheckmark />
        </span>
      </label>
    </div>
  );
};
