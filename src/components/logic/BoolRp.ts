// ! Delete this comment or delete component if its doesn't use
import { FC, ReactElement, useState } from 'react';

type Props = {
  defaultValue?: boolean;

  render: (props: {
    toggleBool: () => void;
    boolValue: boolean;
  }) => ReactElement;
};

export const BoolRp: FC<Props> = (props) => {
  const { defaultValue, render } = props;

  const [isTrue, setValue] = useState(defaultValue || false);

  const toggleBool = () => {
    setValue(!isTrue);
  };

  return render({ boolValue: isTrue, toggleBool });
};
