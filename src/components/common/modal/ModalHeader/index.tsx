// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

import { ReactIcon } from '../../ReactIcon';
import { Typography } from '../../Typography';
import styles from './styles.module.scss';

type Props = {
  title?: string;

  onClose?: () => void;
};

export const ModalHeader: FC<Props> = (props) => {
  const { onClose, title } = props;

  return onClose || title ? (
    <div className={styles.modalHeader}>
      {title && (
        <Typography variant="h3" noWrap>
          {title}
        </Typography>
      )}

      {onClose && (
        <ReactIcon
          className={styles.modalHeader__closeBtn}
          onClick={onClose}
          size="xl"
        >
          <IoMdCloseCircle />
        </ReactIcon>
      )}
    </div>
  ) : null;
};
