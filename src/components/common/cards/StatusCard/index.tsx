// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC } from 'react';
import { IoMdCheckmark, IoMdClose } from 'react-icons/io';

import { ReactIcon } from '../../ReactIcon';
import { Typography } from '../../Typography';
import styles from './styles.module.scss';

type Props = {
  className?: string;
  status: 'success' | 'error';
  text: string;
};

export const StatusCard: FC<Props> = (props) => {
  const { className, status, text } = props;

  const iconWrapperClass = cn(styles.statusCard__iconWrapper, {
    [styles[`statusCard__iconWrapper_${status}`]]: status,
  });

  return (
    <div className={cn(styles.statusCard, className)}>
      <div className={iconWrapperClass}>
        <ReactIcon size="xl">
          {status === 'success' ? <IoMdCheckmark /> : <IoMdClose />}
        </ReactIcon>
      </div>

      <Typography variant="body2" component="p">
        {text}
      </Typography>
    </div>
  );
};
