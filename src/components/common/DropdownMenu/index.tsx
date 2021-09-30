// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC, ReactNode } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  button: ReactNode;
  open: boolean;

  onOutsideClick: (value: boolean) => void;
};

export const DropdownMenu: FC<Props> = (props) => {
  const { onOutsideClick, className, children, button, open } = props;

  const ref = useOnclickOutside(() => {
    onOutsideClick(false);
  });

  const wrapperClass = cn(
    styles.dropdownMenu,
    {
      [styles.dropdownMenu_open]: open,
    },
    className
  );

  return (
    <div className={wrapperClass}>
      <div className={styles.dropdownMenu__buttonWrapper}>{button}</div>

      {open && (
        <div
          className={styles.dropdownMenu__list}
          id="dropdown-menu-list"
          ref={ref}
        >
          {children}
        </div>
      )}
    </div>
  );
};
