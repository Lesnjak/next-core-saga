// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC } from 'react';
import ReactSelect, { OptionsType, ValueType } from 'react-select';

import { SelectOptionType } from '../../../../typings/components/select.types';
import { UiSize } from '../../UiSize';
import styles from './styles.module.scss';

type Props = {
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  error?: boolean;
  value: ValueType<SelectOptionType, true>;
  list: OptionsType<SelectOptionType>;
  id: string;

  getOptionValue?: (option: SelectOptionType) => string;
  getOptionLabel?: (option: SelectOptionType) => string;
  onChange: (option: ValueType<SelectOptionType, true>) => void;
};

export const MultiSelect: FC<Props> = (props) => {
  const {
    getOptionValue,
    getOptionLabel,
    placeholder,
    className,
    disabled,
    onChange,
    height = 'md',
    error,
    value,
    width,
    list,
    id,
  } = props;

  const multiSelectWrapperClass = cn(
    styles.multiSelectWrapper,
    {
      [styles[`multiSelectWrapper__rightBlock_${height}`]]: height,
      [styles.multiSelectWrapper_disabled]: disabled,
      [styles.multiSelectWrapper_error]: error,
    },
    className
  );

  return (
    <UiSize width={width} height={height}>
      <ReactSelect
        classNamePrefix="multiSelect"
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        isSearchable={!disabled}
        placeholder={placeholder}
        className={multiSelectWrapperClass}
        onChange={onChange}
        options={list}
        isMulti
        value={value}
        id={id}
      />
    </UiSize>
  );
};
