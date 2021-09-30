// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC, ReactNode, RefObject } from 'react';

import { Typography } from '../../Typography';
import styles from './styles.module.scss';

export type Props = {
  activeRef: RefObject<any>;
  active: string;
  steps?: boolean;
  tabs: {
    subLabel?: string;
    disabled: boolean;
    onClick: (() => void) | null;
    label: string;
    icon?: ReactNode | string;
    name: string;
    key?: string;
  }[];
};

export const TabsHeader: FC<Props> = (props) => {
  const { activeRef, active, tabs } = props;

  return (
    <div className={styles.tabsHeader}>
      <ul className={styles.tabsHeader__list}>
        {tabs.map(({ onClick, label, name }) => {
          const tabItemClass = cn(styles.tabsHeader__item, {
            [styles.tabsHeader__item_active]: name === active,
          });

          return (
            <li
              className={tabItemClass}
              key={name}
              {...(onClick && { onClick })}
              {...(name === active && { ref: activeRef })}
            >
              <div>
                <div>
                  <Typography variant="body2" color="inherit">
                    {label}
                  </Typography>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
