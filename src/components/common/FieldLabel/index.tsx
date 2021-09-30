// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC, ReactNode } from 'react';

import { Typography } from '../Typography';
import styles from './styles.module.scss';

type Props = {
  rightContent?: ReactNode;
  blockTitle?: boolean;
  className?: string;
  withError?: boolean;
  subLabel?: string;
  children: ReactNode;
  status?: {
    error?: boolean;
    des?: string;
  };
  label?: string;
  id?: string;
};

export const FieldLabel: FC<Props> = (props) => {
  const {
    rightContent,
    blockTitle,
    className,
    withError = true,
    subLabel,
    children,
    status: { error, des } = {},
    label,
    id = '',
  } = props;

  const fieldClass = cn(styles.fieldLabel, {
    [styles.fieldLabel_withError]: withError,
    className,
  });

  const labelClass = cn(styles.fieldLabel__label, {
    [styles.fieldLabel__label_block]: blockTitle,
  });

  return (
    <div className={fieldClass} id={id}>
      {(label || subLabel) && (
        <div className={labelClass}>
          <Typography variant="body2">{label}</Typography>

          {subLabel && (
            <Typography variant="body4" color="textLight">
              {subLabel}
            </Typography>
          )}
        </div>
      )}

      {rightContent && (
        <div className={styles.fieldLabel__rightContent}>{rightContent}</div>
      )}

      {children}

      {withError && error && des && (
        <div className={styles.fieldLabel__des}>
          <Typography color="error" variant="body4">
            {des}
          </Typography>
        </div>
      )}
    </div>
  );
};
