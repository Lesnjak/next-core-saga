// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { countSelector } from '../../../../../store/branches/example/example.selectors';
import { exampleActions } from '../../../../../store/collected.actions';
import { Typography } from '../../../../common/Typography';
import { Button } from '../../../../common/ui/Button';

export const SimpleStateSmart: FC = () => {
  const dispatch = useDispatch();
  const count = useSelector(countSelector);

  return (
    <div>
      <Typography>{count}</Typography>

      <Button
        onClick={() => dispatch(exampleActions.increaseCountExample())}
        id="increase-example"
      >
        Increase test
      </Button>

      <Button
        onClick={() => dispatch(exampleActions.decreaseCountExample())}
        id="decrease-example"
      >
        Decrease test
      </Button>
    </div>
  );
};
