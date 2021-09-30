// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC } from 'react';
import { MdDone, MdError } from 'react-icons/md';

import { ReactIcon } from '../../ReactIcon';
import { Typography } from '../../Typography';
import { LinkButton } from '../../ui/LinkButton';
import { FormBlock } from '../FormBlock';
import styles from './styles.module.scss';

type Props = {
  buttonText?: string;
  className?: string;
  backLink?: string;
  status?: boolean;
  text: string;
};

export const FormStatusBlock: FC<Props> = (props) => {
  const {
    className,
    buttonText = 'Back',
    backLink = '/',
    status = true,
    text,
  } = props;

  const iconClass = cn(styles.formStatusBlock__icon, {
    [styles.formStatusBlock__icon_error]: !status,
  });

  return (
    <div className={cn(styles.formStatusBlock, className)}>
      <FormBlock marginBottom="s6" alignH="center">
        <div className={iconClass}>
          {status ? (
            <ReactIcon color="valid" size="xxxl">
              <MdDone />
            </ReactIcon>
          ) : (
            <ReactIcon color="error" size="xxxl">
              <MdError />
            </ReactIcon>
          )}
        </div>
      </FormBlock>

      <FormBlock marginBottom="s6">
        <Typography variant="body1" align="center">
          {text}
        </Typography>
      </FormBlock>

      <LinkButton height="lg" to={backLink} id="form-success-block-link">
        {buttonText}
      </LinkButton>
    </div>
  );
};
