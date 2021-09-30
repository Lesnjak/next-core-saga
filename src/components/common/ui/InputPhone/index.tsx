// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC } from 'react';
import ReactPhoneInput from 'react-phone-input-2';

import { UiSize } from '../../UiSize';
import styles from './styles.module.scss';

type Props = {
  className?: string;
  disabled?: boolean;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  value: string;
  id: string;

  onChange: (value: string) => void;
};

export const InputPhone: FC<Props> = (props) => {
  const {
    className,
    disabled,
    onChange,
    height = 'md',
    width,
    value,
    id,
  } = props;

  const inputPhoneClass = cn(styles.inputPhone, className);

  return (
    <UiSize width={width} height={height}>
      <div className={inputPhoneClass} id={id}>
        <ReactPhoneInput
          containerClass="input-phone__container"
          // countryCodeEditable={false}
          inputProps={{ autoComplete: 'off' }}
          onChange={onChange}
          disabled={disabled}
          // country="in"
          value={value}
        />
      </div>
    </UiSize>
  );
};
