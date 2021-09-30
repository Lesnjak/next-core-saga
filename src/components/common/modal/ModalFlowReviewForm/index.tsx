import { FC, Fragment, ReactNode } from 'react';

import { Typography } from '../../Typography';
import { Button } from '../../ui/Button';
import { ModalActionsTemplate } from '../ModalActionsTemplate';
import { ModalContentTemplate } from '../ModalContentTemplate';
import styles from './styles.module.scss';

interface IModalFlowReviewFormData {
  value: string | number;
  title: string;
}

export type Props = {
  confirmButtonLabel?: string;
  editButtonLabel?: string;
  headerMessage?: string | ReactNode;
  footerMessage?: string;
  reviewData?: IModalFlowReviewFormData[];
  title: string;

  closeDialogHandler: () => void;
  actionHandler: () => void;
  cancelHandler: () => void;
};

export const ModalFlowReviewForm: FC<Props> = (props) => {
  const {
    confirmButtonLabel = 'Confirm',
    closeDialogHandler,
    editButtonLabel = 'Edit',
    actionHandler,
    cancelHandler,
    headerMessage,
    footerMessage,
    reviewData,
    title,
  } = props;

  return (
    <ModalContentTemplate onClose={closeDialogHandler} title={title}>
      <div className={styles.modalFlowReviewForm}>
        {headerMessage && headerMessage}

        {reviewData && (
          <Fragment>
            {reviewData.map((aReviewData) => (
              <div
                className={styles.modalFlowReviewForm__reviewItem}
                key={aReviewData.title}
              >
                <Typography variant="subtitle3" component="p">
                  {aReviewData.title}
                </Typography>

                <Typography>{aReviewData.value}</Typography>
              </div>
            ))}
          </Fragment>
        )}
        {footerMessage && footerMessage}
      </div>

      <ModalActionsTemplate noPadding>
        <Button
          height="lg"
          variant="contained"
          onClick={cancelHandler}
          id="review-form-edit-button"
        >
          {editButtonLabel}
        </Button>

        <Button
          height="lg"
          variant="contained"
          onClick={actionHandler}
          id="review-form-confirm-button"
        >
          {confirmButtonLabel}
        </Button>
      </ModalActionsTemplate>
    </ModalContentTemplate>
  );
};
