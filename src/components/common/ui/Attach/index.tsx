// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { CSSProperties, FC } from 'react';
import { IoIosAttach, IoIosClose } from 'react-icons/io';

import { ReactIcon } from '../../ReactIcon';
import { Typography } from '../../Typography';
import styles from './styles.module.scss';

type Props = {
  backgroundColor?: 'primary' | 'secondary';
  disablePadding?: boolean;
  className?: string;
  readOnly?: boolean;
  style?: CSSProperties;
  limit?: number;
  title?: string;
  files: {
    name: string;
    size: string;
    id: number;
  }[];
  id: string;

  onDownload?: (name: string) => void;
  onDelete: (id: number) => void;
  onOpen: () => void;
};

export const Attach: FC<Props> = (props) => {
  const {
    backgroundColor = 'primary',
    disablePadding,
    onDownload,
    className,
    readOnly,
    onDelete,
    onOpen,
    style,
    title = 'Attach files',
    limit = 100,
    files = [],
    id,
  } = props;

  const attachClass = cn(styles.attach, {
    [styles.attach_disablePadding]: disablePadding,
    [styles[`attach_bgColor_${backgroundColor}`]]: backgroundColor,
    className,
  });

  const attachButtonClass = cn(styles.attach__button, {
    [styles.attach__button_disabled]: files.length === limit,
  });

  return (
    <div className={attachClass} style={style} id={id}>
      <div className={styles.attach__header}>
        <div className={styles.attach__title}>
          <Typography variant="body2">{title}</Typography>
        </div>

        {!readOnly && (
          <div
            className={attachButtonClass}
            onClick={files.length < limit ? onOpen : undefined}
          >
            <ReactIcon className={styles.attach__buttonIcon} size="md">
              <IoIosAttach />
            </ReactIcon>

            <Typography variant="body3">Attach</Typography>
          </div>
        )}
      </div>

      {!!files.length && (
        <ul className={styles.attach__list}>
          {files.map((file) => (
            <li
              className={styles.attach__listItem}
              key={file.id}
              {...(onDownload && {
                onClick: () => onDownload(file.name),
                style: { cursor: 'pointer' },
              })}
            >
              <ReactIcon className={styles.attach__listItemIcon} size="md">
                <IoIosAttach />
              </ReactIcon>

              <div className={styles.attach__listItemName} title={file.name}>
                <Typography variant="body2">{file.name}</Typography>
              </div>

              <span className={styles.attach__listItemSize}>
                <Typography variant="body2">{file.size} </Typography>
              </span>

              {!readOnly && (
                <ReactIcon
                  className={styles.attach__listItemDel}
                  onClick={() => onDelete(file.id)}
                  size="lg"
                >
                  <IoIosClose />
                </ReactIcon>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
