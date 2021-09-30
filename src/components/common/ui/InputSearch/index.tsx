// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import debounce from 'lodash/debounce';
import { ChangeEvent, FC, useCallback } from 'react';
import { IoIosSearch, IoMdCloseCircle } from 'react-icons/io';

import { ReactIcon } from '../../ReactIcon';
import { UiSize } from '../../UiSize';
import styles from './styles.module.scss';

type Props = {
  placeholder?: string;
  className?: string;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  value: string;
  name: string;
  id: string;

  onIconClick?: () => void;
  onChange: (e: ChangeEvent<any>) => void;
  onClear?: () => void;
};

export const InputSearch: FC<Props> = (props) => {
  const {
    placeholder = 'Search...',
    onIconClick,
    className,
    onChange,
    onClear,
    height = 'md',
    width,
    value,
    name,
    id,
  } = props;

  const delayedQuery = useCallback(
    debounce((query) => onChange(query), 100),
    [onChange]
  );

  const debouncedChangeHandler = (e: ChangeEvent<any>) => {
    delayedQuery(e.target.value);
  };

  const inputSearchClass = cn(
    styles.inputSearch,
    {
      [styles[`inputSearch_clearWrapper_${height}`]]: height && onClear,
      [styles[`inputSearch_iconWrapper_${height}`]]: height,
    },
    className
  );

  const iconWrapperClass = cn(styles.inputSearch__iconWrapper, {
    [styles[`inputSearch__iconWrapper_${height}`]]: height,
  });

  const clearWrapperClass = cn(styles.inputSearch__clearIconWrapper, {
    [styles[`inputSearch__clearIconWrapper_${height}`]]: height,
  });

  return (
    <UiSize width={width} height={height}>
      <div className={inputSearchClass}>
        <div
          className={iconWrapperClass}
          onClick={onIconClick}
          style={{ ...(onIconClick && { cursor: 'pointer' }) }}
        >
          <ReactIcon>
            <IoIosSearch />
          </ReactIcon>
        </div>

        <input
          autoComplete="off"
          placeholder={placeholder}
          onChange={debouncedChangeHandler}
          value={value}
          type="text"
          name={name}
          id={id}
        />

        {value && onClear && (
          <div className={clearWrapperClass} onClick={onClear}>
            <ReactIcon size="lg">
              <IoMdCloseCircle />
            </ReactIcon>
          </div>
        )}
      </div>
    </UiSize>
  );
};
