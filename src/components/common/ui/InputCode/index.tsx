// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { ChangeEvent, FC } from 'react';
import ReactCodeInput from 'react-code-input';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  disabled?: boolean;
  value: string;
  id: string;

  onChange: (e: ChangeEvent<any>) => void;
};

export const InputCode: FC<Props> = (props) => {
  const { className, onChange, disabled, value, id } = props;

  const inputCodeClass = cn(styles.inputCode, className);

  return (
    <div className={inputCodeClass}>
      <ReactCodeInput
        className={styles.inputCode__field}
        onChange={onChange}
        disabled={disabled}
        fields={4}
        value={value}
        type="number"
        id={id}
      />
    </div>
  );
};
