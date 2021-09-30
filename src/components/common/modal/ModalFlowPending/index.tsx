import { FC } from 'react';

import { Loader } from '../../Loader';
import { Typography } from '../../Typography';
import { ModalContentTemplate } from '../ModalContentTemplate';
import styles from './styles.module.scss';

type IProps = {
  message?: string;
  title?: string;

  closeDialogHandler: () => void;
};

export const ModalFlowPending: FC<IProps> = (props) => {
  const {
    closeDialogHandler,
    message = 'Please wait, the action is in progress...',
    title = 'Processing',
  } = props;

  return (
    <ModalContentTemplate onClose={closeDialogHandler} title={title}>
      <div className={styles.modalFlowPending}>
        <Loader className={styles.modalFlowPending__loader} />

        <Typography>{message}</Typography>
      </div>
    </ModalContentTemplate>
  );
};
