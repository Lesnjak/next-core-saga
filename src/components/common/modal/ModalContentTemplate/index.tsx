// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC, Fragment, ReactNode } from 'react';

import { ModalHeader } from '../ModalHeader';
import styles from './styles.module.scss';

type Props = {
  noPadding?: boolean;
  closeIcon?: boolean;
  children: ReactNode;
  title?: string;

  onClose?: () => void;
};

export const ModalContentTemplate: FC<Props> = (props) => {
  const { noPadding, closeIcon = true, children, onClose, title } = props;

  const modalContentTemplateBodyClass = cn(styles.modalContentTemplate__body, {
    [styles.modalContentTemplate__body_noPadding]: noPadding,
  });

  return (
    <Fragment>
      {(title || closeIcon) && <ModalHeader onClose={onClose} title={title} />}
      <div className={modalContentTemplateBodyClass}>{children}</div>
    </Fragment>
  );
};
