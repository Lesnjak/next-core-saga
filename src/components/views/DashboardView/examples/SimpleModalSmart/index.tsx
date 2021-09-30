// ! Delete this comment or delete component if its doesn't use
import { FC, Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { modalActions } from '../../../../../store/collected.actions';
import { SimpleModal } from '../../../../common/modal/SimpleModal';
import { Button } from '../../../../common/ui/Button';

export const SimpleModalSmart: FC = () => {
  const dispatch = useDispatch();

  const simpleModalId1 = 'simple-modal-id';

  return (
    <Fragment>
      <div>
        <Button
          onClick={() => dispatch(modalActions.openSimpleModal(simpleModalId1))}
          id="simple-modal-test"
        >
          Open simple modal
        </Button>
      </div>

      <SimpleModal title="Modal title" id={simpleModalId1}>
        Test modal
      </SimpleModal>
    </Fragment>
  );
};
