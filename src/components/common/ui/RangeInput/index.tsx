// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC, ReactElement } from 'react';

import { Input, Props as IInputProps } from '../Input';
import styles from './styles.module.scss';

type Props = {
  className?: string;
  id: string;

  from: (cb: any) => ReactElement;
  to: (cb: any) => ReactElement;
};

export const RangeInput: FC<Props> = (props) => {
  const { className, from, to, id } = props;

  return (
    <div className={cn(styles.rangeInput, className)} id={`range-input-${id}`}>
      <div>
        {from((props: IInputProps) => (
          <Input {...props} />
        ))}
      </div>

      <div>
        {to((props: IInputProps) => (
          <Input {...props} />
        ))}
      </div>
    </div>
  );
};
