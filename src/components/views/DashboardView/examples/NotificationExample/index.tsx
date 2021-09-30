// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';

import * as notificationsService from '../../../../../services/notifications.service';
import { Button } from '../../../../common/ui/Button';

export const NotificationExample: FC = () => {
  return (
    <div>
      <Button
        onClick={() =>
          notificationsService.successMsg('Message was sent successfully')
        }
        id="button-test-toast"
      >
        Test notification
      </Button>
    </div>
  );
};
