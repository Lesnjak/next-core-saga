// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC } from 'react';
import { Position, Tooltip as TippyTooltip, TooltipProps } from 'react-tippy';

import styles from './styles.module.scss';

type Props = {
  customOptions?: Partial<TooltipProps>;
  simpleTitle: string;
  className?: string;
};

export const Tooltip: FC<Props> = (props) => {
  const { customOptions, simpleTitle, className, children } = props;

  const initialOptions = {
    position: 'bottom' as Position,
    title: simpleTitle,
    ...customOptions,
    className: cn(styles.tooltip, className),
  };

  return (
    <TippyTooltip trigger="click" {...initialOptions}>
      {children}
    </TippyTooltip>
  );
};
