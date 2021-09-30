// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC, ReactChild, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  noPadding?: boolean;
  children: ReactNode;

  onClose?: () => void;
};

export const ModalActionsTemplate: FC<Props> = (props) => {
  const { noPadding, children } = props;

  const buttonsQuantity = children && (children as ReactChild[]).length;

  const modalActionsTemplateClass = cn(styles.modalActionsTemplate, {
    [styles.modalActionsTemplate_noPadding]: noPadding,
  });

  return (
    <div
      className={modalActionsTemplateClass}
      data-buttons-quantity={buttonsQuantity}
    >
      {children}
    </div>
  );
};
