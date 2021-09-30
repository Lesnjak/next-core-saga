import { ReactNode } from 'react';

import { Props as ModalFlowResultProps } from '../../../components/common/modal/ModalFlowResult';
import { Props as ModalFlowReviewFormProps } from '../../../components/common/modal/ModalFlowReviewForm';

export enum ModalFlowEnum {
  BEFORE_FORM = 'BEFORE_FORM',
  FORM = 'FORM',
  REVIEW = 'REVIEW',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  CLOSED = 'CLOSED',
}

export enum SimpleModalNamesEnum {}

export type ModalNameType = SimpleModalNamesEnum | null | string;

export interface ISimpleModalState {
  modalName: ModalNameType;
  modalData: Record<string, any> | null;
}

export type IModalBranchState = {
  modalActiveState: boolean;
  simpleModalState: ISimpleModalState;
  modalFlowsState: IModalFlowsState;
};

export interface IModalFlowsState {
  [key: string]: IModalFlowData;
}

export interface IModalFlowData {
  modalType: ModalFlowEnum;
  modalData: unknown;
}
export interface IModalConfig {
  beforeForm?: IRenderFlowStep;
  pending?: IPendingFlowStep;
  result?: IRenderResultFlowStep | IResultViewProps;
  review?: IRenderFlowStep | IReviewViewProps;
  form?: IRenderFlowStep;
}

export interface IRenderFlowStep {
  render(modalData: unknown, modalEvents: IModalEvents): ReactNode;
}

export interface IRenderResultFlowStep {
  render: (
    modalData: unknown,
    modalType: ModalFlowEnum,
    modalEvents: IModalEvents
  ) => ReactNode;
}

export interface IModalEvents {
  changeModalType: (type: ModalFlowEnum, data?: unknown) => void;
  clearCloseModal: () => void;
  closeModal: () => void;
}

export interface IReviewViewProps {
  reviewViewProps: (
    modalData: unknown,
    modalEvents: IModalEvents
  ) => ModalFlowReviewFormProps;
}

export interface IResultViewProps {
  resultViewProps: (
    modalData: unknown,
    modalType: ModalFlowEnum,
    modalEvents: IModalEvents
  ) => ModalFlowResultProps;
}

export interface IPendingFlowStep {
  message?: string;
  render?: (modalData: unknown, modalEvents: IModalEvents) => ReactNode;
  title?: string;
}
