// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { simpleModalStateSelector } from '../../../../store/branches/modal/modal.selectors';
import { ModalNameType } from '../../../../store/branches/modal/modal.types';
import { modalActions } from '../../../../store/collected.actions';
import { ModalBase } from '../ModalBase';
import { ModalHeader } from '../ModalHeader';
import styles from './styles.module.scss';

type Props = {
  isOpenCustom?: boolean;
  bodyHeight?: 'default' | 'full';
  noPadding?: boolean;
  closeIcon?: boolean;
  children: ReactNode;
  width?: 'xs' | 'sm' | 'md' | 'min-content' | 'full';
  title?: string;
  id: ModalNameType;

  onClose?: () => void;
};

export const SimpleModal: FC<Props> = (props) => {
  const {
    isOpenCustom,
    bodyHeight,
    noPadding,
    closeIcon = true,
    children,
    onClose,
    width,
    title,
    id,
  } = props;

  const dispatch = useDispatch();
  const simpleModal = useSelector(simpleModalStateSelector);

  const isModalOpen = simpleModal.modalName === id;
  const modalBaseProps = {
    bodyHeight,
    width,
    open: isOpenCustom || isModalOpen,
  };

  const closeSimpleModal = () => dispatch(modalActions.closeSimpleModal());

  const simpleModalContentClass = cn(styles.simpleModal__content, {
    [styles.simpleModal__content_noPadding]: noPadding,
  });

  return (
    <ModalBase {...modalBaseProps}>
      {(title || closeIcon) && (
        <ModalHeader onClose={onClose || closeSimpleModal} title={title} />
      )}

      <div className={simpleModalContentClass}>{children}</div>
    </ModalBase>
  );
};
