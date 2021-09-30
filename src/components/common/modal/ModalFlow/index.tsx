// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { modalFlowStateSelector } from '../../../../store/branches/modal/modal.selectors';
import {
  IModalConfig,
  ModalFlowEnum,
} from '../../../../store/branches/modal/modal.types';
import { modalActions } from '../../../../store/collected.actions';
import { ModalBase } from '../ModalBase';
import { ModalFlowContent } from '../ModalFlowContent';

type Props = {
  modalConfig: IModalConfig;
  bodyHeight?: 'default' | 'full';
  className?: string;
  width?: 'xs' | 'sm' | 'md' | 'min-content' | 'full';
  id: string;
};

export const ModalFlow: FC<Props> = (props) => {
  const { modalConfig, bodyHeight, className, width, id } = props;

  const dispatch = useDispatch();
  const modalFlow = useSelector(modalFlowStateSelector(id));

  if (!modalFlow) {
    return null;
  }

  const isModalFlowOpen = modalFlow.modalType !== ModalFlowEnum.CLOSED;
  const modalBaseProps = { bodyHeight, width, open: isModalFlowOpen };

  const changeModalType = (type: ModalFlowEnum, data?: unknown) => {
    dispatch(modalActions.changeFlowModalType(id, type, data));
  };

  const closeModal = () => {
    dispatch(modalActions.closeModalFlow(id));
  };

  const clearCloseModal = () => {
    dispatch(modalActions.clearCloseModalFlow(id));
  };

  return (
    <ModalBase {...modalBaseProps}>
      <ModalFlowContent
        changeModalType={changeModalType}
        clearCloseModal={clearCloseModal}
        modalConfig={modalConfig}
        closeModal={closeModal}
        modalType={modalFlow.modalType}
        modalData={modalFlow.modalData}
        className={className}
        id={id}
      />
    </ModalBase>
  );
};
