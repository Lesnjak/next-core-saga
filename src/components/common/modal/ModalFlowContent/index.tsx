import cn from 'classnames';
import { FC, Fragment } from 'react';

import {
  IModalConfig,
  IModalEvents,
  ModalFlowEnum,
} from '../../../../store/branches/modal/modal.types';
import { ModalFlowPending } from '../ModalFlowPending';
import { ModalFlowResult } from '../ModalFlowResult';
import { ModalFlowReviewForm } from '../ModalFlowReviewForm';
import styles from './styles.module.scss';

export type Props = {
  modalConfig: IModalConfig;
  className?: string;
  modalData?: unknown;
  modalType: ModalFlowEnum;
  id: string;

  changeModalType: (type: ModalFlowEnum, data?: unknown) => void;
  clearCloseModal: () => void;
  closeModal: () => void;
};

export const ModalFlowContent: FC<Props> = (props) => {
  const {
    modalType,
    modalData,
    modalConfig,
    changeModalType,
    clearCloseModal,
    closeModal,
    className,
  } = props;
  const { beforeForm, form, review, pending, result } = modalConfig;

  const modalEvents: IModalEvents = {
    changeModalType,
    clearCloseModal,
    closeModal,
  };

  const content = () => {
    switch (modalType) {
      case ModalFlowEnum.BEFORE_FORM:
        if (beforeForm && beforeForm.render) {
          return (
            <Fragment>{beforeForm.render(modalData, modalEvents)}</Fragment>
          );
        }

        return null;

      case ModalFlowEnum.FORM:
        if (form) {
          return <Fragment>{form.render(modalData, modalEvents)}</Fragment>;
        }

        return null;

      case ModalFlowEnum.REVIEW:
        if (review && 'render' in review && review.render) {
          return <Fragment>{review.render(modalData, modalEvents)}</Fragment>;
        }

        if (review && 'reviewViewProps' in review) {
          const reviewViewProps = review.reviewViewProps(
            modalData,
            modalEvents
          );

          return <ModalFlowReviewForm {...reviewViewProps} />;
        }

        return null;

      case ModalFlowEnum.PENDING:
        if (pending && 'render' in pending && pending.render) {
          return <Fragment>{pending.render(modalData, modalEvents)}</Fragment>;
        }

        return (
          <ModalFlowPending
            closeDialogHandler={modalEvents.clearCloseModal}
            message={pending && pending.message}
            title={pending && pending.title}
          />
        );

      case ModalFlowEnum.SUCCESS:
      case ModalFlowEnum.FAILURE:
        if (result && 'render' in result && result.render) {
          return (
            <Fragment>
              {result.render(modalData, modalType, modalEvents)}
            </Fragment>
          );
        }

        if (result && 'resultViewProps' in result) {
          const resultViewProps = result.resultViewProps(
            modalData,
            modalType,
            modalEvents
          );

          return <ModalFlowResult {...resultViewProps} />;
        }

        return null;

      case ModalFlowEnum.CLOSED:
        return null;

      default:
        return null;
    }
  };

  return content() ? (
    <div className={cn(styles.modalFlowContent, className)}>{content()}</div>
  ) : null;
};
