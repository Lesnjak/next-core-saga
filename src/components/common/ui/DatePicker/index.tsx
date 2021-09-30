// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { DateTime } from 'luxon';
import { FC, FocusEvent } from 'react';
import ReactDatePicker from 'react-datepicker';
import { IoIosCalendar, IoMdCloseCircle } from 'react-icons/io';

import { ReactIcon } from '../../ReactIcon';
import { UiSize } from '../../UiSize';
import styles from './styles.module.scss';

export type Props = {
  customConfig?: Record<string, any>;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  error?: boolean;
  value?: string;
  name: string;
  id: string;

  getCustomDateFormat?: (date: Date) => string | any;
  onChange: (date: string) => void;
  onClick?: () => void;
  onClear?: () => void;
  onBlur?: (e: FocusEvent<any>) => void;
};

export const DatePicker: FC<Props> = (props) => {
  const {
    getCustomDateFormat,
    customConfig,
    placeholder,
    className,
    disabled,
    onChange,
    onClear,
    onBlur,
    height = 'md',
    width,
    error,
    value,
    name,
    id,
  } = props;

  const config = {
    dateFormat: 'yyyy-MM-dd',
    ...customConfig,
  };

  const handleChange = (date: Date) => {
    const modifiedDate = date
      ? getCustomDateFormat
        ? getCustomDateFormat(date)
        : DateTime.fromJSDate(date).toFormat('yyyy-MM-dd')
      : '';

    onChange(modifiedDate);
  };

  const datePickerClass = cn(
    styles.datePicker,
    {
      [styles[`datePicker_rightBlock_${height}`]]: height,
      [styles.datePicker_error]: error,
    },
    className
  );

  const rightBlockClass = cn(styles.datePicker__rightBlock, {
    [styles[`datePicker__rightBlock_${height}`]]: height,
  });

  return (
    <UiSize width={width} height={height}>
      <div className={datePickerClass} id={id}>
        <ReactDatePicker
          placeholderText={placeholder}
          showPopperArrow={false}
          onChange={handleChange}
          disabled={disabled}
          selected={(value && new Date(value)) || undefined}
          onBlur={onBlur}
          name={name}
          {...config}
        />

        <div className={rightBlockClass}>
          {value && onClear ? (
            <ReactIcon onClick={onClear} size="md">
              <IoMdCloseCircle />
            </ReactIcon>
          ) : (
            <ReactIcon>
              <IoIosCalendar />
            </ReactIcon>
          )}
        </div>
      </div>
    </UiSize>
  );
};
