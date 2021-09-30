// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC, ReactElement } from 'react';

import { DatePicker, Props as IDatePickerProps } from '../DatePicker';
import styles from './styles.module.scss';

type Props = {
  className?: string;
  id: string;

  dateFrom: (cb: any) => ReactElement;
  dateTo: (cb: any) => ReactElement;
};

export const DatePeriod: FC<Props> = (props) => {
  const { className, dateFrom, dateTo, id } = props;

  return (
    <div className={cn(styles.datePeriod, className)} id={`date-period-${id}`}>
      <div>
        {dateFrom((props: IDatePickerProps) => (
          <DatePicker {...props} />
        ))}
      </div>

      <div>
        {dateTo((props: IDatePickerProps) => (
          <DatePicker {...props} />
        ))}
      </div>
    </div>
  );
};
