import { FC, Fragment } from 'react';

import { StatusCard } from '../../cards/StatusCard';
import { Typography } from '../../Typography';
import { Button } from '../../ui/Button';
import { ModalActionsTemplate } from '../ModalActionsTemplate';
import { ModalContentTemplate } from '../ModalContentTemplate';
import styles from './styles.module.scss';

interface IModalFlowResultData {
  title: string;
  value: string | number;
}

interface IDialogLabel {
  title: string;
  value: string;
}

export type Props = {
  dialogLabel?: IDialogLabel;
  statusText?: string;
  results?: IModalFlowResultData[];
  title: string;
  type: 'success' | 'error';

  closeDialogHandler: () => void;
};

export const ModalFlowResult: FC<Props> = (props) => {
  const { closeDialogHandler, dialogLabel, statusText, results, title, type } =
    props;

  return (
    <ModalContentTemplate onClose={closeDialogHandler} title={title}>
      <div className={styles.modalFlowResult}>
        {statusText && (
          <StatusCard
            className={styles.modalFlowResult__statusCard}
            status={type}
            text={statusText}
          />
        )}

        {dialogLabel && (
          <Typography variant="body2">
            {dialogLabel.title} {dialogLabel.value}
          </Typography>
        )}

        {results && !!results.length && (
          <Fragment>
            {results.map((aResult) => {
              return (
                <div
                  className={styles.modalFlowResult__resultItem}
                  key={aResult.title}
                >
                  <Typography variant="subtitle3">{aResult.title}</Typography>
                  <Typography>{aResult.value}</Typography>
                </div>
              );
            })}
          </Fragment>
        )}
      </div>

      <ModalActionsTemplate noPadding>
        <Button
          height="lg"
          variant="contained"
          onClick={closeDialogHandler}
          id="result-button"
        >
          Continue
        </Button>
      </ModalActionsTemplate>
    </ModalContentTemplate>
  );
};
