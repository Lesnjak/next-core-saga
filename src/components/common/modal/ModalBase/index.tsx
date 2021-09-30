// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC, ReactNode, useEffect } from 'react';

import { ClientPortalRp } from '../../../logic/ClientPortalRp';
import styles from './styles.module.scss';

type Props = {
  bodyHeight?: 'default' | 'full';
  children: ReactNode;
  width?: 'xs' | 'sm' | 'md' | 'min-content' | 'full';
  open: boolean;
};

export const ModalBase: FC<Props> = (props) => {
  const { bodyHeight, children, width = 'sm', open } = props;

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        document.body.setAttribute('class', 'overflow-hidden');
      }, 250);
    } else {
      document.body.removeAttribute('class');
    }
  }, [open]);

  const modalClass = cn(styles.modal, {
    [styles.modal_open]: open,
  });

  const modalContent = cn(styles.modal__content, {
    [styles[`modal__content_width_${width}`]]: width,
    [styles[`modal__content_bodyHeight_${bodyHeight}`]]: bodyHeight,
  });

  return (
    <ClientPortalRp>
      {open ? (
        <div className={modalClass}>
          <div className={modalContent}>{children}</div>
          <div className={styles.modal__backdrop} />
        </div>
      ) : null}
    </ClientPortalRp>
  );
};
