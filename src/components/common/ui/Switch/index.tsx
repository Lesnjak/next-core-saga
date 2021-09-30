// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { ChangeEvent, FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  defaultChecked?: boolean;
  className?: string;
  disabled?: boolean;
  value: boolean;
  size?: 'sm' | 'md';
  name: string;
  id: string;

  onChange: (e: ChangeEvent<any>) => void;
};

export const Switch: FC<Props> = (props) => {
  const {
    defaultChecked,
    className,
    onChange,
    disabled,
    value,
    size = 'md',
    name,
    id,
  } = props;

  const switchClass = cn(
    styles.switch,
    {
      [styles[`switch_size_${size}`]]: size,
      [styles.switch_disabled]: disabled,
    },
    className
  );

  return (
    <div className={switchClass}>
      <input
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        checked={value}
        type="checkbox"
        name={name}
        id={id}
      />

      <label className={styles.switch__label} htmlFor={id}>
        <span className={styles.switch__button} />
      </label>
    </div>
  );
};
