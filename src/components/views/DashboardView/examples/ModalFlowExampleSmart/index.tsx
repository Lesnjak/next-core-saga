// ! Delete this comment or delete component if its doesn't use
import { FC, Fragment } from 'react';
import { useDispatch } from 'react-redux';

import {
  IModalConfig,
  ModalFlowEnum,
} from '../../../../../store/branches/modal/modal.types';
import {
  exampleActions,
  modalActions,
} from '../../../../../store/collected.actions';
import { ModalContentTemplate } from '../../../../common/modal/ModalContentTemplate';
import { ModalFlow } from '../../../../common/modal/ModalFlow';
import { Button } from '../../../../common/ui/Button';
import {
  IFormValues as IModalFlowFormValues,
  ModalFlowExampleForm,
} from '../ModalFlowExampleForm';
import styles from './styles.module.scss';

export const ModalFlowExampleSmart: FC = () => {
  const dispatch = useDispatch();

  const modalFlowId = 'modal-flow-id-1';

  const confirm = (
    modalData: IModalFlowFormValues,
    changeModalType: (type: ModalFlowEnum, data?: unknown) => void
  ) => {
    changeModalType(ModalFlowEnum.PENDING);
    dispatch(
      exampleActions.getForecastExampleReq({
        ...modalData,
        asModalFlow: true,
        modalFlowId,
      })
    );
  };

  const reviewData = (modalData: IModalFlowFormValues) => {
    const { lat, lon } = modalData;

    return [
      { title: 'Latitude coordinates', value: lat },
      { title: 'Number of tokens', value: lon },
    ];
  };

  return (
    <Fragment>
      <div>
        <Button
          onClick={() =>
            dispatch(
              modalActions.openModalFlow(modalFlowId, {
                modalType: ModalFlowEnum.FORM,
                modalData: {},
              })
            )
          }
          id="modal-flow-test"
        >
          Open modal flow
        </Button>
      </div>

      <ModalFlow
        modalConfig={
          {
            form: {
              render: (_modalData: IModalFlowFormValues, modalEvents: any) => {
                return (
                  <ModalContentTemplate
                    onClose={modalEvents.clearCloseModal}
                    title="Modal flow test form"
                  >
                    <ModalFlowExampleForm
                      onSubmit={modalEvents.changeModalType}
                      onClose={modalEvents.clearCloseModal}
                    />
                  </ModalContentTemplate>
                );
              },
            },

            review: {
              reviewViewProps: (
                modalData: IModalFlowFormValues,
                modalEvents
              ) => ({
                closeDialogHandler: () => modalEvents.clearCloseModal(),
                confirmButtonLabel: 'Confirm',
                actionHandler: () =>
                  confirm(modalData, modalEvents.changeModalType),
                cancelHandler: () =>
                  modalEvents.changeModalType(ModalFlowEnum.FORM),
                reviewData: reviewData(modalData),
                title: 'Modal flow test form review',
              }),
            },

            result: {
              resultViewProps: (
                modalData: IModalFlowFormValues,
                modalType,
                modalEvents
              ) => ({
                closeDialogHandler: () => modalEvents.clearCloseModal(),
                statusText:
                  modalType === ModalFlowEnum.SUCCESS
                    ? `Success mock`
                    : `Error mock`,
                results: reviewData(modalData),
                title:
                  modalType === ModalFlowEnum.SUCCESS
                    ? 'Confirmation'
                    : 'Action failed',
                type: modalType === ModalFlowEnum.SUCCESS ? 'success' : 'error',
              }),
            },
          } as IModalConfig
        }
        className={styles.modalFlowExample}
        id={modalFlowId}
      />
    </Fragment>
  );
};
